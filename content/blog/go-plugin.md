+++
title = "Quel système de plugin pour votre application Go ?"
date = 2023-05-22
draft = false

[taxonomies]
categories = ["Golang"]
tags = ["go", "plugin", "extension", "shared", "wasm", "wasi"]

[extra]
lang = "fr"
toc = true
show_comment = true
math = false
mermaid = true
cc_license = true
outdate_warn = false
outdate_warn_days = 120
social_preview = true
+++

Il est parfois utile de pouvoir ajouter des fonctionnalités à une application sans avoir à la recompiler. C'est ce que permettent les plugins.

Golang propose un système de plugin natif, mais il y a quelque limitation, il existe des alternatives, mais elles ne sont pas parfaites non plus.

J'ai fait un petit benchmark pour comparer les différentes solutions.

<!-- more -->

Je vais parler de plugin, mais ce ne sont pas tous des solutions de plugin, pour simplifier, je vais utiliser le terme plugin pour parler de toutes les solutions.

Voici la liste des solutions que j'ai testé :

- [Go plugin](https://golang.org/pkg/plugin/): Plugin natif de Golang
- [Hashicorp go-plugin](https://github.com/hashicorp/go-plugin): Plugin basé sur RPC
- [Wazero](https://github.com/tetratelabs/wazero): Plugin basé sur WebAssembly
- [Wasmer](https://github.com/wasmerio/wasmer-go): Plugin basé sur WebAssembly
- [Yaegi](https://github.com/traefik/yaegi): Plugin basé sur l'interpréteur Go

J'ai aussi testé les performances d'une func go inline et no inline pour comparaison.

## Plugin go

Plugin Go est le plugin natif de Golang, ça génère un fichier `.so` (Shared Object) qui est chargé par l'application.

### Avantages

- C'est natif
- C'est simple à utiliser
- C'est très rapide
- Il y a une bonne DX

### Inconvénients

- On ne peut pas utiliser de plugin codé en Go sur Windows
- On ne peut pas décharger un plugin une fois chargé
- Le plugin doit être compilé avec la même version de Go que l'application, les mêmes flags de compilation et les mêmes options de build

## Hashicorp go-plugin

Hashicorp go-plugin est un plugin basé sur RPC, il utilise [gRPC](https://grpc.io/) ou `net/rpc` pour la communication entre le plugin et l'application, ce qui veux dire que le plugin est un programe qui sera executer dans un autre processus.

### Avantages

- On peut utiliser n'importe quel langage pour écrire le plugin
- On peut décharger un plugin une fois chargé
- C'est multiplateforme
- Les plugins sont isolés dans un autre processus

### Inconvénients

- C'est lent
- La DX est pas terrible

## Wazero et Wasmer

Wazero et Wasmer sont des plugins basés sur WebAssembly, ils utilisent [WASI](https://wasi.dev/).

La proposition de valeur est top, pouvoir codé en Rust, C++, Go, ... et utiliser le plugin (module wasm) dans une application Go ou n'importe quel autre langage qui supporte WASI.

### Avantages

- On peut utiliser n'importe quel langage qui support WASI pour écrire le plugin.
- C'est portable
- C'est rapide
- La DX est bonne

### Inconvénients

- Ça ne supporte pas les types String ou Array, il faut passer par des adresses mémoires et une taille de buffer
- La DX est pas terrible si on doit utiliser des types String
- Pas de communication externes, ou alors certaine engine wasm propose des solutions, mais ce n'est pas standard.

## Yaegi

Yaegi est un interpréteur Go, il permet d'executer du code Go à la volée.

### Avantages

- Bonne DX
- Gestions fine de l'envrionnement d'execution
- Bonne performance

### Inconvénients

- Le packaging n'est pas simple, il faut inclure les dependances dans le dossier du plugin, on peut surement corriger ça via un zip des sources et unzip au chargement du plugin
- Ce n'est pas compiler

## Benchmark

```
goos: darwin
goarch: amd64
pkg: github.com/euskadi31/go-plugin-benchmark
cpu: Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz
BenchmarkGoNativeFuncInline-8     	1000000000	    0.3477 ns/op	       0 B/op	       0 allocs/op
BenchmarkGoNativeFuncNoInline-8   	 755171646	     1.584 ns/op	       0 B/op	       0 allocs/op
BenchmarkGoNativePlugin-8         	 757251984	     1.579 ns/op	       0 B/op	       0 allocs/op
BenchmarkHashicorpPlugin-8        	     20880	     60441 ns/op	     584 B/op	      15 allocs/op
BenchmarkWasmerRustSum-8          	    328557	      3989 ns/op	     208 B/op	      12 allocs/op
BenchmarkWasmerGoSum-8            	    326815	      3555 ns/op	     208 B/op	      12 allocs/op
BenchmarkWazeroRustSum-8          	  13622338	     81.71 ns/op	      24 B/op	       2 allocs/op
BenchmarkWazeroGoSum-8            	  14121835	     82.20 ns/op	      24 B/op	       2 allocs/op
BenchmarkYaegi-8                  	   1261688	     920.8 ns/op	     528 B/op	      14 allocs/op
PASS
coverage: [no statements]
ok  	github.com/euskadi31/go-plugin-benchmark	12.605s
```

Comme dit précédemment, j'ai testé une fonction inline et une fonction no inline pour comparaison.

En Go par defaut, les fonctions sont inline, ce qui veux dire que le code de la function est copié à chaque appel, ce qui est plus rapide, mais ça augmente la taille du binaire, vous pouvez désactiver l'inline avec un commentaire avant la func `//go:noinline`.

Donc sans surprise, la fonction inline est plus rapide que la fonction no inline, car elle ne fait pas d'appel de fonction, logique :)

On peut voir que le plugin natif est aussi rapide que la fonction noinline, ce qui est normal, car c'est la même chose.

Par contre je ne m'attendait pas à ce que le plugin Hashicorp soit aussi lent...

Wazero est vraiment rapide, bien plus que Wasmer.

Yaegi est aussi très rapide, bien plus que Wasmer et Hashicorp Go-plugin, d'autent plus que c'est du code interprété !

J'ai voulu aussi comparé un module WASM codé en Rust et un module WASM codé en Go, on vois qu'il n'y a pas de différence de performance, il faut aussi prendre en compte que le test est très simple, il faudrait faire un test plus complexe pour voir la différence.

## Conclusion

IL n'y a pas de solution parfaite, il faut choisir en fonction de ses besoins, en fonction du context, on ne choisira pas la même solution.

Pour le moment, je pense que WASM n'est pas encore asset mature pour être utilisé en t'en que plugin, mais ça viendra, c'est une solution très prometteuse.

Yaegi est une solution très intéressante, mais il faut voir si on peut faire un packaging plus simple, c'est utilisé par [Traefik]() pour les middlewares, donc c'est viable en production, mais ça va dépendre du besoin en performance.

Vous pouvez retrouver le code des benchmarks ici : https://github.com/euskadi31/go-plugin-benchmark

Je suis ouvert à toute remarque ou suggestion, n'hésitez pas à me contacter sur Twitter [@euskadi31](https://twitter.com/euskadi31) ou me faire une PR sur le repo du benchmark.
