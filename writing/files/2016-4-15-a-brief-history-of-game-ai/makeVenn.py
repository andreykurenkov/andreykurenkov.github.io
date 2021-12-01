from matplotlib_venn import venn3
from matplotlib import pyplot as plt
plt.figure(figsize=(12,12))
venn3(subsets = (16, 16, 4, 16, 4, 4, 1), 
      set_labels = ("'Easy to get \n Google-scale data for'\n (amenable to\n supervised learning)", 
                    "'Game-like' \n(deterministic,\n fully-observable,\n and having a simple\n evaluation function)",
                    "'Zero-memory friendly'\n (a monte carlo process,\n cheap to simulate)"))
plt.show()
