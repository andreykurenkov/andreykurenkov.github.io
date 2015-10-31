---
layout: post
title: On Work
date: 2015-07-24 02:26:22.000000000 -07:00
tags: [philosophy,life,quasi-essay]
status: publish
type: post
published: true
meta:
  _edit_last: '44769023'
  geo_public: '0'
  _rest_api_published: '1'
  _rest_api_client_id: '-1'
  _publicize_job_id: '13033401663'
  _publicize_done_11876230: '1'
  _wpas_done_11923979: '1'
comments: true
author: andrey_kurenkov
excerpt: Reflections on having worked myself to the brink of burning out
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
