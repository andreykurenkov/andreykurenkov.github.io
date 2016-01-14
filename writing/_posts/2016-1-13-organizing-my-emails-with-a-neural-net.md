---
layout: post
title: Organizing My Emails with a Neural Net
date: 2016-1-13lT19:19:34-07:00
tags: [ML,NN,technical,software]
status: published
type: post
published: true
comments: true
author: andrey_kurenkov
excerpt: "Organizing emails into folders is a worthy effort, but quicky gets old - why not get some help fromA I?"
---
<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/18-conf_normalized2.png" alt="Conf mat 0"/> 
    <figcaption>Or, how to make this happen with your gmail data. The entirety of the code used for this post <b><a href="https://github.com/andreykurenkov/emailinsight/tree/master/pyScripts">can be found here</a></b>. </figcaption>    
</figure>

I have always been fond of school projects that actually trust me to have interest in what I am learning. Sadly, most undergraduate school assignments don't, but there are those rare projects that require the student to engage with what they are learning by partially defining the problem they set out to solve.  At least for me, it is a shame that more projects do not do this, since almost invariably such projects results in me caring and learning much more. But, some do. One of my favorite assignments of this kind was part of the Georgia Tech Into to Machine Learning class, and resulted in one of my more fun projects: [EmailFiler](http://www.andreykurenkov.com/projects/hacks/email-filer/).

#EmailFiler V1
Basically, the assignment was to pick some datasets, throw a bunch of supervised learning algorithms at them, and analyze the results. But here's the thing: we could make our own datasets if we so chose. And so choose I did - to export my gmail data and explore the feasibility of machine-learned email categorization. See, I learned long ago that it's often best to keep emails around in case there is randomly some need to refer back to them in the future. But, I also learned that I can't help but strive for the ideal of the empty inbox (hopeless as that may be). So, years ago I started categorizing my emails into about a dozen folders within gmail, and by the point I took the machine learning class I had many thousands of emails spread across these categories. It seemed like a great application of ML to make a classifier that could suggest a single category for each email in the inbox for one-click organizing of it.

<figure>
    <img class="postimageactual" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/1-emailscategories.png" alt="Emails categories"/> 
    <figcaption>The set of categories and email counts I worked with at the time</figcaption>    
</figure>

Well, you got your input data, the emails, and your labels, the categories, and even a nice button to export all the data in .mbox format - easy right? Not so fast. Though I was not exactly striving for full NLP text comprehension, I still wanted to learn using email text and metadata, and at first did not really know how to convert this data into nice a machine-learnable dataset. The simple answer to this, as any person who has taken NLP can quickly point out, is to use a Bag of Words approach - just finding what the most common 500 or so words in all the emails are, and then creating binary features for each word (features that have a value of 1 for an email if it contained the word, and 0 otherwise). I did the same for the sender of the email - picking out about the top 20, since in some cases the sender should correlate strongly with the category (for example the sender being my research adviser and the category 'research') - and for the domain the email was sent from (since a few like piazza and gatech.edu would be strongly indicative for categories like 'TA' and 'academic'). So, after an hour or so of writing [mbox parsing code](https://github.com/andreykurenkov/emailinsight/blob/master/pyScripts/mboxConvert.py) I ended up with the function that output my actual dataset as a csv; looking over it may clarify how simple these features really were:

{% highlight python %}
#...bunch of parsing code above this
def mboxToBinaryCSV(folder,csvfile='data.csv',perLabel=False):                  
    outputFile = open(os.path.join(folder,csvfile),'w')                         
                                                                                
    emails = parseEmails(folder)                                                
    (topWords,topSenders,topDomains)=getTopEmailCounts(emails,perLabel=perLabel)
                                                                                
    for sender in topSenders:                                                   
        outputFile.write('Sender %s,'%sender)                                   
    for domain in topDomains:                                                   
        outputFile.write('From domain %s,'%domain)                              
    for word in topWords:                                                       
        outputFile.write('Has %s,'%word)                                        
    outputFile.write('label\n')                                                 
    labelMap= {}                                                                
    for email in emails:                                                        
        for sender in topSenders:                                               
            outputFile.write('1, ' if email.sender==sender else '0,')           
        for domain in topDomains:                                               
            outputFile.write('1, ' if email.fromDomain==domain else '0,')          
        for word in topWords:                                                   
            outputFile.write('1, ' if word in email.words else '0,') 
{% endhighlight %}

So, how well did it work? Well, but not as well as I hoped. At the time I was fond of the Orange Python ML framework, and so as per the assignment tested how well a bunch of algorithms did against my dataset (the code for this [can be found here](https://github.com/andreykurenkov/emailinsight/blob/master/pyScripts/code-learner.py) - apparently I manually implemented cross validation and accuracy evaluation...). The best I got was about 75% accuracy on the test set, with the standouts being decision trees, as the best algorithm, and neural nets, as the worst:

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/2-emailsdtree.png" alt="DTrees emails"/> 
    <figcaption>How Decision Trees fared on my little email dataset</figcaption>    
</figure>

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/3-emailsnn.png" alt="NN emails"/> 
    <figcaption>... And now neural nets </figcaption>    
</figure>

If you take a look at those beautiful OpenOffice Calc plots, you will soon see that the best Decision Trees managed to achieve on the test set is roughly 72%, and that neural nets could only get to a measly 65% - an F! Way better than random, considering there are 11 categories, but far from great. Why the disappointing result? Well, as stated the features created for the dataset are very simple - just selecting the 500 most frequent words will yield a few good indicators, but also many generic terms that just appear a lot in english such as 'that' or 'is'. I understood this at the time and tried a few things - removing 3-character words entirely, and writing some annoying code to select the most frequent words in each category specifically rather than in all the emails - but ultimately did not manage to figure out how to get better results.

#Enter Keras
So, why am I writing this if I did this years ago and got fairly lame results then (I did get a good grade, though!)? In short, to try again. Having just completed a [giant 4-part history of neural networks and Deep Learning](http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/), and in so doing learned what fancy modern terms like 'dropout' and 'relu' mean, it seemed only appropriate to dive into a modern machine learning framework and see what I could do. 

But, where to start? By picking the toys, of course! The framework I decided to try working with is [Keras](http://keras.io/), both because it is in Python (which seems to be a favorite for data science and machine learning nowdays, and has the wonderful [numpy](http://www.numpy.org/), [pandas](http://pandas.pydata.org/), and [scikit-learn](http://www.numpy.org/) all playing nice with each other) and because it is backed by the well regarded Theano library. It also just so happenes that Keras also has several easy to copy-paste examples to get started with, including one with a [multi-category text classification problem](https://github.com/fchollet/keras/blob/master/examples/reuters_mlp.py) much as with my email problem. And, here's the interesting thing - the example uses just about the same features as I did for my class project. It finds the 1000 most frequent words in the documents, makes those into binary features, and trains a neural net with one hidden layer to predict the category of input text based solely of those features.

So, the obvious first thing to try is exactly this, but with my own data - see if doing feature extraction with Keras will work better. My data is not exactly in the Keras data format, but luckily using my mbox parsing code it is easy to write a short function to create an equivalent to the dataset in the example:

{% highlight python %}
def get_keras_features(folder,nb_words=None,test_split=0.1):
    (totalWordsCount,fromCount,domainCount,labels) = getEmailStats(emails)      
    #...Some boring filtering in between code 
    texts = []                                                                 
    emailLabels = []                                                            
    for email in emails:                                                        
        if email.label not in labels:                                           
            continue                                                            
        text = email.sender+" "+str(email.subject)                              
        text+= email.fromDomain                                                 
        text+=email.content                                                     
        texts.append(text.replace('\n','').replace('\r',''))                    
        emailLabels.append(labelNums[email.label]) 
    tokenizer = Tokenizer(nb_words)
    tokenizer.fit_on_texts(texts)
    sequences = tokenizer.texts_to_sequences(texts)
    random_order = np.random.permutation(len(texts))
    index_split = (int)(test_split*len(emails))
    train_indices = random_order[index_split:]
    test_indices = random_order[:index_split]
    X_train = features[train_indices]                                       
    X_test = features[test_indices]
    Y_train = [emailLabels[i] for i in train_indices]
    Y_test = [emailLabels[i] for i in test_indices]
    return ((X_train,Y_train),(X_test,Y_test))
{% endhighlight %}

In essence, this is doing exactly what I did to generate my old features, except I letting Keras do the heavy lifting this time.
This code indeed worked, and even gave me a little update as to the contents of my email:

	Using Theano backend.
	Label email count breakdown:
		Personal:440
		Group work:150
		Financial:118
		Academic:1088
		Professional:388
		Group work/SolarJackets:1535
		Personal/Programming:229
		Professional/Research:1066
		Professional/TA:1801
		Sent:513
		Unread:146
		Professional/EPFL:234
		Important:142
		Professional/RISS:173
	Total emails: 8023

Eight thousand emails - not a giant dataset by any stretch, but nevertheless enough to do some serious machine learning. 
So, I can generate the data in the correct format, and now it is just a matter of seeing if training a neural net with it works. 
So, at this point all I have is really a small python file with the above and a basically a copy of the Keras example:

{% highlight python %}
max_words = 1000
batch_size = 32
nb_epoch = 5

(X_train, y_train), (X_test, y_test) = mboxToNumpy('.',nb_words=max_words, test_split=0.1)
nb_classes = np.max(y_train)+1

#Vectorizing sequence data...
tokenizer = Tokenizer(nb_words=max_words)
X_train = tokenizer.sequences_to_matrix(X_train, mode='binary')
X_test = tokenizer.sequences_to_matrix(X_test, mode='binary')

#Convert class vector to binary class matrix (for use with categorical_crossentropy)
Y_train = np_utils.to_categorical(y_train, nb_classes)
Y_test = np_utils.to_categorical(y_test, nb_classes)

print('Building model...')
model = Sequential()
model.add(Dense(512, input_shape=(max_words,)))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(nb_classes))
model.add(Activation('softmax'))

model.compile(loss='categorical_crossentropy', optimizer='adam')
history = model.fit(X_train, Y_train, nb_epoch=nb_epoch, batch_size=batch_size, 
                    verbose=1, show_accuracy=True, validation_split=0.1)
score = model.evaluate(X_test, Y_test, batch_size=batch_size, verbose=1, show_accuracy=True)
print('Test score:', score[0])
print('Test accuracy:', score[1])
{% endhighlight %}

Before long that file will grow to be over 500 lines of code, but let's not get ahead of ourselves... As you can see, there are a
whole bunch of parameters here, and it's hard to say if they are all correct. But let's just run with it and see what happens:


	7221 train sequences
	802 test sequences
	Building model...
	Train on 6498 samples, validate on 723 samples
	Epoch 1/5
	6498/6498 [==============================] - 2s - loss: 1.3182 - acc: 0.6320 - val_loss: 0.8166 - val_acc: 0.7718
	Epoch 2/5
	6498/6498 [==============================] - 2s - loss: 0.6201 - acc: 0.8316 - val_loss: 0.6598 - val_acc: 0.8285
	Epoch 3/5
	6498/6498 [==============================] - 2s - loss: 0.4102 - acc: 0.8883 - val_loss: 0.6214 - val_acc: 0.8216
	Epoch 4/5
	6498/6498 [==============================] - 2s - loss: 0.2960 - acc: 0.9214 - val_loss: 0.6178 - val_acc: 0.8202
	Epoch 5/5
	6498/6498 [==============================] - 2s - loss: 0.2294 - acc: 0.9372 - val_loss: 0.6031 - val_acc: 0.8326
	802/802 [==============================] - 0s     
	Test score: 0.585222780162

**Test accuracy: 0.847880299252**

<br>

Hell yeah 85% test accuracy! That handily beats the measly 65% score of my old neural net. Awesome. Except... why?  
I mean, my old code was doing basically exactly this - finding the most frequest words, creating a binary matrix of 
features, and training a neural net with one hidden layer to be the classifier. Perhaps, it is because of this fancy new 
'relu' neuron, and dropout, and using a non-sgd optimizer? Let's find out! Since my old features were indeed binary and in 
a matrix, it takes very little work to make those be the dataset this neural net is trained with. And so, the  results:


	Epoch 1/5
	6546/6546 [==============================] - 1s - loss: 1.8417 - acc: 0.4551 - val_loss: 1.4071 - val_acc: 0.5659
	Epoch 2/5
	6546/6546 [==============================] - 1s - loss: 1.2317 - acc: 0.6150 - val_loss: 1.1837 - val_acc: 0.6291
	Epoch 3/5
	6546/6546 [==============================] - 1s - loss: 1.0417 - acc: 0.6661 - val_loss: 1.1216 - val_acc: 0.6360
	Epoch 4/5
	6546/6546 [==============================] - 1s - loss: 0.9372 - acc: 0.6968 - val_loss: 1.0689 - val_acc: 0.6635
	Epoch 5/5
	6546/6546 [==============================] - 2s - loss: 0.8547 - acc: 0.7215 - val_loss: 1.0564 - val_acc: 0.6690
	808/808 [==============================] - 0s     
	Test score: 1.03195088158

**Test accuracy: 0.64603960396**

<br>

Ouch. So yes, my old email-categorizing solution was fairly flawed. I can't say for sure, but I think it is a mix of overcontstraining the features
(forcing the top senders, domains, and words from each category to be there). The Keras example just throws the top 1000 words into a big matrix without
any more intelligent filtering, and lets the neural net have at it. Not limiting what the features can be lets better ones be discovered, and so the 
overall accuracy is better. Well, that, or my code just sucks and has mistakes in it - modifying it to be less restrictive still only nets a 70% accuracy. 
In any case, it's clear that I was able to beat my old result by leveraging a modern Deep Learning library, so the question now clearly is - can I do better?

#Doing Better

When I first started looking at the Keras code, I was briefly excited by the mistaken notion that it would use the actual sequence of text (switched to numbers,
but still in the correct order). It turned out that this was not the case - as we saw that first example just used an example with binary features indicating the 
presence of the word anywhere in the text - but that does not mean that it can't be. Indeed, a very cool recent phenomena in machine learning is the resurgence of 
recurrent neural nets, which are well suited for dealing with long sequences of data. So, instead of changing the emails into matrices of binary features it's possible to
just change the words into numbers with the wordss frequency and feed in the entire sequence into a LSTM or GRU neural net. And, guess what? There is also a nice easy to copy-paste example of machine
learning with these types of neural nets, so it is easy to fire up and see what happens:

	Epoch 1/15
	7264/7264 [===========================] - 1330s - loss: 2.3454 - acc: 0.2411 - val_loss: 2.0348 - val_acc: 0.3594
	Epoch 2/15
	7264/7264 [===========================] - 1333s - loss: 1.9242 - acc: 0.4062 - val_loss: 1.5605 - val_acc: 0.5502
	Epoch 3/15
	7264/7264 [===========================] - 1337s - loss: 1.3903 - acc: 0.6039 - val_loss: 1.1995 - val_acc: 0.6568
	...
	Epoch 14/15
	7264/7264 [===========================] - 1350s - loss: 0.3547 - acc: 0.9031 - val_loss: 0.8497 - val_acc: 0.7980
	Epoch 15/15
	7264/7264 [===========================] - 1352s - loss: 0.3190 - acc: 0.9126 - val_loss: 0.8617 - val_acc: 0.7869
	Test score: 0.861739277323

**Test accuracy: 0.786864931846**

Darn it. Not only did the LSTM take FOREVER, but the results at the end were not that good. Presumably the reason for this is that my emails are just not that much data, 
and in general sequences are not that useful for categorizing them. Okay, well, what now? Well, remember how I just sort of used the defaults of the example without thinking 
too hard about it? Let's see if I can figure out a better approach. To start with, it 


Sadly, Keras itself does not have much in the way of visualization or inspection tools - but that does not mean we cannot jerry rig some together!
To start with, of course, I google for what is already out there. And what I promptly find is an [ongoing discussion](https://github.com/fchollet/keras/issues/254) concerning  visualization,
with no resolution in sight. Bummer, but not entirely - there exists [a fork of Keras](https://github.com/aleju/keras) with at least a nice way to graph the training progress. Not very useful,
but fun, so let's do it! After hacking it a bit to plot batches instead of epochs, here is our first taste of sweet visuals:

<figure>
    <img class="postimage" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/4-graph.png" alt="NN training"/> 
    <figcaption>The progression of neural net training for a slightly modified version of the example (with more words included) </figcaption>    
</figure>

Interesting - the cross validation between epochs results in big jumps in training accuracy, not something I'd expect. But, more pertinently, it's easy to see the training accuracy
just about reaches 1.0 and definitely plateaus. Okay, good, but the harder problem is increasing the test accuracy. As before, the first question is whether I can quickly alter the 
feature representation to help the neural net out. The Keras module that converts the text into matrices has several options besides making a binary matrix: matrices with word counts,
frequencies, or tfidf values. It is also very easy to alter the amount of words kept in the matrices as features, and so being the amazing programmer that I am I manage to write a few
loops to evaluate how varying the feature type and word count affects the test accuracy. Not only that, but I even make a pretty plot of the results with python:

<figure>
    <img class="postimagehalf" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/5-word_accs.png" alt="Word accs"/> 
    <img class="postimagehalf" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/6-word_baseline_accs.png" alt="Baseline accs"/> 
    <figcaption>Test accuracy based on feature type and how many words are kept as features (baseline being k nearest neighbors)</figcaption>    
</figure>

Again, interesting. The most basic and least information dense feature type, binary 1s or 0s indicating word presence, is about as good or better than the other features that convey more 
about the original data. This is not too unexpected, though - most likely more interesting words like 'code' or 'grade' are helpful for categorization, and having a single occurance in
an email is likely almost as informative as more than one. No doubt the more exact features help somewhat, but also lead to worse performance due to more potential for overfitting. All in all,
what we see is that the binary feature type is clearly the best one, and that increasing the number of words helps out quite a bit to get accuracies of about 87%-88%. 
Okay, so I can stick with the binary features, and want to use at least 2500 words since the accuracy seems to plateau around point. 

A good question to ask at this point is whether having all these words is actually what's important, and a simpler algorithm could do just fine if I just use these features. To answer, we also have a simple baseline algorithm with the k nearest neighbors ([from scikit](http://scikit-learn.org/stable/modules/neighbors.html)), which clearly performs much worse than the neural net but benefits from the more specific features. Linear regression performed even worse, so it seems my use of neural nets is justified. 

By the way, all this word increasing is not cheap. Even with cached versions of the dataset such that I did not have to parse the emails and extract features each time, running all these tests
took a hefty amount of time:

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/8-word_times.png" alt="Word times"/> 
    <figcaption>Linear increase in time as word count is increased. Not bad, really; linear regression was far worse</figcaption>    
</figure>

Okay, so increasing the number of words helps, but I am still not cracking the 90% mark - and I want to get an A here! So the next logical thing is to stick with 2500 words and look at varying the neural net size; 
the default size of 512 seems more than sufficient for my small dataset, but it's worth seeing if altering this can help. Also, the example Keras model happens to have 50% dropout on the hidden layer and it 
would be interesting to see if this actually meaningfully helps the performance. So, time to spin up another set of loops and get another pretty graph:

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/9-hidden_accs_zoomed.png" alt="Hidden accs"/> 
    <figcaption>Zoomed in view of accuracies for different dropouts and hidden layer sizes</figcaption>    
</figure>

Well, this is somewhat surprising - we don't need very many hidden layer units at all to do well! With lower dropout (less regularization), as few as 64 and 124 hidden neurons can do just about as well as
the default of 512. These results are averaged across five runs, by the way, so mere variation in the outcomes does not account for the ability of small hidden layer to do well. This suggests that the large 
word counts are helpful for just including the helpful features, but that there are not really that many helpful features to pick up - otherwise more neurons would be necessary to do better. This is good to know,
since we can save quite a bit of time by using the smaller hidden layers:

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/10-hidden_times.png" alt="Hidden times"/> 
    <figcaption>Again, linear growth as we increase the hidden layer (as we'd hope since they are independnent of each other) </figcaption>    
</figure>


Well, hmm, that did not get me that coveted 90% test accuracy... Time to try being a little smarter about this. See, the current approach of making features out of the top 2500 frequent words is rather silly, in 
that it includes common english words such as 'i' or 'that' along with useful category specific words such as 'homework' or 'due'. But, it's tricky to just guess a cutoff of most frequent words, or blacklist some
number of words - you never know what turns out to be useful for features, since it is possible I happen to use one plain word more in one category than the others (such as 'Personal'). So, let's avoid the guesswork
and instead rely on good ol' feature selection to pick out features that are actually good and filter out silly ones like 'i'. Again, this is easy using scikit and its [SelectKBest](http://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectKBest.html) class, and is fast enough that it barely takes any time compared to running the neural net. So, does this work? 

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/11-select_accs_zoomed_512.png" alt="Select accs"/> 
    <figcaption>Yes, it works, 90%! </figcaption>    
</figure>

Very nice! Though there is still variance in the performance, more words to start with is clearly better, but this set of words can be cut down rather heavily with feature selection and still work well. Apparently the neural net has no problem with undefitting if all the words are kept around - probably because as we saw with the small hidden layers there are not really that many features that need to be picked up - but doing feature selection does help out with speed.

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/12-select_accs_zoomed_32.png" alt="Select accs 32"/> 
    <figcaption>The same test with only 32 hidden layer units, with the previous one having 512 - still quite good performance </figcaption>    
</figure> 

#Final Thoughts

Having achieved my goal of 90% test set accuracy and been unsuccesful with other ideas (increasing the number of layers, for example), it's about this point that I decide this is good enough and about time for me to start feeiling self satisfied. But, then I get distracted again and do a few more things. Namely, this stuff still takes forever to run in large part because I have yet to make use of the now standard trick of doing machine learning with a GPU. So, following a [very nice tutorial](http://deeplearning.net/software/theano/install_ubuntu.html) I do just that, and smile with satisfaction:

<figure>
    <img class="postimagehalf" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/13-select_times_512.png" alt="Select times"/> 
    <img class="postimagehalf" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/14-select_times_512_gpu.png" alt="Select times GPU"/> 
    <figcaption>The times taken to achieve that 90% plot above, without vs with GPU</figcaption>    
</figure>

YEAH! Now that is a significant speedup, and combined with feature selection and small hidden layer suggests this could all be done in tiny amounts of time. 
Having run out of ideas on how to improve this performance or speed it up, why not just spend a bit of time looking a bit deeper into the results. It would
be quite interesting to see what the feature selector actually finds to be good words to use, so let's go ahead and see what the best and worst ones are for
just one run of the neural net:

<figure>
    <img class="postimagesmall" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/15-scores_best.png" alt="Select times"/> 
    <img class="postimagesmall" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/16-scores_worst.png" alt="Select times GPU"/> 
    <figcaption>Best and worst words according to chi squared feature selection <a href="http://scikit-learn.org/stable/auto_examples/ensemble/plot_forest_importances.html">(loosely based on Scikit sample code)</a></figcaption>    
</figure>

Quite curious. A lot of the best ones are names or refer to specific things (the 'controller' is from 'motor controller'), as could be expected, but other ones
such as 'remember' or 'total' would not strike me as very good features. The worst ones, on the other hand, are fairly predictable being either overly generic or overly
specific words. Another interesting thing to look at is what mistakes the neural net makes, with a [confusion matrix again from scikit learn](http://scikit-learn.org/stable/auto_examples/model_selection/plot_confusion_matrix.html#example-model-selection-plot-confusion-matrix-py):

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/17-conf_normalized.png" alt="Conf mat"/> 
    <figcaption>The confusion matrix for the neural net results</figcaption>    
</figure>

The visualization here implies the 'Unread' and 'Important' categories are problem makers. But wait! I did not even create those, I don't really care about things working correctly with those, nor with 'Sent'.  Clearly I should take those out and see if the neural net can do a good job specifically with the categories I created for myself. So, let's wrap up with a final experiment in which those irrelevant categories are removed and we use the most features of any run so far - 10000 words with selection of the 4000 best:

	Epoch 1/5
	Epoch 1/5
	5850/5850 [==============================] - 2s - loss: 0.8013 - acc: 0.7879 - val_loss: 0.2976 - val_acc: 0.9369
	Epoch 2/5
	5850/5850 [==============================] - 1s - loss: 0.1953 - acc: 0.9557 - val_loss: 0.2322 - val_acc: 0.9508
	Epoch 3/5
	5850/5850 [==============================] - 1s - loss: 0.0988 - acc: 0.9795 - val_loss: 0.2418 - val_acc: 0.9338
	Epoch 4/5
	5850/5850 [==============================] - 1s - loss: 0.0609 - acc: 0.9865 - val_loss: 0.2275 - val_acc: 0.9462
	Epoch 5/5
	5850/5850 [==============================] - 1s - loss: 0.0406 - acc: 0.9925 - val_loss: 0.2326 - val_acc: 0.9462
	722/722 [==============================] - 0s     
	Test score: 0.243211859068

**Test accuracy: 0.940443213296**

<figure>
    <img class="postimagesmaller" src="{{ site.url }}/writing/images/2016-1-13-neural-net-categorize-my-email/18-conf_normalized2.png" alt="Conf mat 2"/> 
    <figcaption>The confusion matrix for the updated neural net results</figcaption>    
</figure>


How about that! After all that, the neural net can predict categories that are right 94% of the time. I don't know if not many people use categories in gmail, but if it really is this easy to make a classifier that is right most of the time, I would really like it if gmail indeed had such a machine-learned approach to one-click email organizing. But, for now, I can just feel nice knowing I managed to get a 20% improvement over my last attempt at this, and improve neural net performance from the F it got last time I tried to the A it receives now.








