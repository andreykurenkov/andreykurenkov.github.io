---
layout: project-post
title: MetaMusic
date: 2015-05-03 02:26:22.000000000 -07:00
tags: [visualization,music,data,app,android]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
excerpt: A sweet little app to visualize music metadata on a smartphone
what: A sweet little app to visualize music metadata on a smartphone
who: Me and two other guys
why: I liked the idea of pie graphs of genre, bar charts for plays, etc... I still think this should exist in other apps.
where: Georgia Tech (hackathon, then a few weeks of solo work)
when: April 2013-May 2013 
image:
  teaser: projects/metamusic/icon.png
  feature: projects/metamusic/metamusic3.jpg
  id: project-image
projectimages:
  - name: first
    path: projects/metamusic/metamusic1.jpg
    caption: An image
    alt: an alt
  - name: first
    path: projects/metamusic/metamusic2.jpg
    caption: An image
    alt: an alt
  - name: first
    path: projects/metamusic/metamusic4.jpg
    caption: An image
    alt: an alt
---
Should be studying for test, messing with this. Reuploded slightly bigger.
Quick and dirty pie chart of meta-data from google-music. Did not realize it would such - may try to integrate allmusic or wikipedia genre classification.

But yeah, I pretty much duct-taped some open source libraries together. This is this:

import gmusic.api.impl.GoogleMusicAPI;
import gmusic.api.model.Song;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Point;
import java.awt.Rectangle;
import java.util.Collection;

import javax.swing.JApplet;
import javax.swing.JProgressBar;
import javax.swing.SwingWorker;

import org.jfree.chart.plot.PiePlot;
import org.jfree.data.UnknownKeyException;
import org.jfree.data.general.DefaultPieDataset;

public class MetaMusic extends JApplet {
private PiePlot plot;
private JProgressBar bar;
private SwingWorker load;
private boolean started;

public void init() {
bar = new JProgressBar();
bar.setIndeterminate(true);
this.add(bar);
final GoogleMusicAPI api = new GoogleMusicAPI();
load = new SwingWorker() {
@Override
protected Object doInBackground() throws Exception {
api.login("andrey.sendme@gmail.com","secretdonttelltoyou");
Collection<Song> songs = api.getAllSongs();
DefaultPieDataset data = new DefaultPieDataset();
for (Song s : songs) {
try {
data.setValue(s.getGenre(), data.getValue(s.getGenre()).intValue() + 1);
} catch (UnknownKeyException ex) {
data.setValue(s.getGenre(), 1);
}
}
plot = new PiePlot(data);
MetaMusic.this.remove(bar);
MetaMusic.this.repaint();
return null;
}
};
load.execute();
}

public void paint(Graphics g) {
super.paint(g);
if (plot != null) {
plot.draw((Graphics2D) g,
new Rectangle(0, 0, (int) this.getSize().getWidth(), (int) this.getSize().getHeight()), new Point(0, 0),
null, null);
}

}
}
