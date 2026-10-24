---
layout: project
title: "Auditory Pain Detection Using Machine Learning"
summary: "Exploring whether vocal signals alone can be used to identify pain states, using CLAP audio embeddings."
github_url: "https://github.com/astroscar09/tame_pain_analysis"
permalink: /projects/audio-pain-detection/
---

## Overview

This project investigates whether audio data can classify whether an individual is experiencing pain. By analyzing vocal patterns in recorded speech and sounds, we explore the feasibility of building machine learning models that could support medical decision-making in low-information or remote settings, such as telephone-based healthcare services.

## Project Goal

The primary goal was to determine whether pain can be reliably classified from audio recordings using machine learning. In particular, we wanted to understand how different modeling strategies perform under realistic constraints such as limited training data and variability across individual speakers.

## Approach &amp; Methods

We began with a custom neural network trained directly on audio-derived features. While this showed moderate success, performance was limited by the small size of the available dataset.

To address this, we adopted a transfer-learning approach using embeddings from a large pre-trained audio–text model (CLAP). These embeddings provided richer acoustic representations, which were then fine-tuned for the pain-classification task.

Model performance was evaluated under two data-splitting strategies:

- **Random splits:** samples from the same individual may appear in both training and testing sets.
- **Person-level splits:** models are trained on one group of individuals and tested on entirely unseen speakers.

## Key Findings

> Models evaluated using random splits achieved higher accuracy, indicating that CLAP embeddings capture meaningful signals related to pain. However, performance dropped significantly when evaluated on unseen speakers using person-level splits.

## Interpretation

The performance gap between random and person-level splits suggests speaker identity plays a substantial role in model predictions. Without a baseline understanding of an individual's normal vocal characteristics, the model struggles to distinguish between voice-specific traits and changes associated with pain — a key challenge in clinical audio modeling, where generalization across speakers may require explicit normalization or personalized reference signals.

## Potential Applications

Despite these challenges, audio-based pain detection has promising applications in remote and telephone-based medical services, where visual or physiological measurements may be unavailable. Such a system could serve as an auxiliary diagnostic tool, helping clinicians flag potential pain states and prioritize follow-up care.

## Limitations

- Small labeled dataset
- Limited speaker diversity
- No personalized baseline modeling
- Binary classification rather than pain-intensity estimation

## Future Work

- Incorporating speaker-specific baseline or normalization strategies
- Expanding the dataset across individuals and recording conditions
- Exploring multimodal inputs (e.g., audio + transcripts)
- Predicting pain intensity or uncertainty rather than binary labels
- Evaluating fairness and robustness across demographics

## Continuing the Project

This project is designed to be extensible. Future contributors could build on this work by adding new datasets, experimenting with alternative embeddings, deploying the model as an inference API, or integrating it into clinical decision-support workflows.
