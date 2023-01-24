+++
title = "Comment fonctionne le streaming vidéo avec HLS"
date = 2023-01-11
draft = false

[taxonomies]
categories = ["Streaming Video"]
tags = ["hls", "video", "streaming", "ott"]

[extra]
lang = "fr"
toc = true
show_comment = true
math = false
mermaid = true
cc_license = true
outdate_warn = false
outdate_warn_days = 120
metas = [
    { name = "twitter:card", content="summary_large_image" },
    { name = "twitter:title", content="Comment fonctionne le streaming vidéo avec HLS" },
    { name = "twitter:image", content="https://i.ibb.co/280245f/thumbail.jpg" },
]
+++

Comment fonctionne le streaming vidéo avec HLS ?

<!-- more -->

Je vais essayer de vous expliquer le fonctionnement de cette technologie de streaming vidéo utilisé par les plateformes de streaming tel que Netflix, Amazon Prime Video, Disney+, Apple TV+, Molotov TV, etc.

## C'est quoi HLS ?

HLS est une technologie de streaming vidéo développé par Apple en 2009. Elle permet de diffuser des vidéos en continu sur des appareils mobiles et des ordinateurs. Elle est basée sur le protocole HTTP et utilise le format de conteneur MPEG-2 Transport Stream (TS) pour la vidéo et Advanced Audio Coding (AAC) pour l'audio. Elle est compatible avec les navigateurs web et les applications mobiles.

C'est une des technologies de streaming vidéo les plus utilisées d'après [ce rapport de 2019](https://go.bitmovin.com/confirmation-video-developer-report-2019).

## Comment fonctionne HLS ?

Comme dit précédemment, Il utilise le protocole HTTP pour télécharger des fichiers vidéo et audio.

Concrètement, le serveur HTTP va envoyer au client un fichier m3u8 (une playlist) qui contient la liste des fichiers vidéo et audio.

```m3u8
foo
```

Ces fichiers sont appelés segments. Chaque segment contient une partie de la vidéo et de l'audio.
Les segments sont téléchargés séquentiellement, chaque segment est téléchargé en parallèle avec le segment précédent, cela permet de télécharger les segments plus rapidement.
