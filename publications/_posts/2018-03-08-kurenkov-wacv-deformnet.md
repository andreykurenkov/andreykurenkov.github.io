---
layout: publication
title: "DeformNet: Free-Form Deformation Network for 3d Shape Reconstruction From a Single Image"
authors: "Andrey Kurenkov, Jingwei Ji, Animesh Garg, Viraj Mehta, JunYoung Gwak, Chris Choy, Silvio Savarese"
pub_info_name: "IEEE Winter Conference on Applications of Computer Vision (WACV)"
pub_info_date: March 2018
excerpt: text text text
images:
  thumb: kurenkov-wacv18-deformnet.png
  main: kurenkov-wacv18-deformnet.png
paper_link: "https://arxiv.org/abs/1708.04672"
webpage_link: "https://deformnet-site.github.io/DeformNet-website/"
---
3D reconstruction from a single image is a key problem in multiple applications ranging from robotic manipulation to augmented reality. Prior methods have tackled this problem through generative models which predict 3D reconstructions as voxels or point clouds. However, these methods can be computationally expensive and miss fine details. We introduce a new differentiable layer for 3D data deformation and use it in DeformNet to learn a model for 3D reconstruction-through-deformation. DeformNet takes an image input, searches the nearest shape template from a database, and deforms the template to match the query image. We evaluate our approach on the ShapeNet dataset and show that - (a) the Free-Form Deformation layer is a powerful new building block for Deep Learning models that manipulate 3D data (b) DeformNet uses this FFD layer combined with shape retrieval for smooth and detail-preserving 3D reconstruction of qualitatively plausible point clouds with respect to a single query image (c) compared to other state-of-the-art 3D reconstruction methods, DeformNet quantitatively matches or outperforms their benchmarks by significant margins.
