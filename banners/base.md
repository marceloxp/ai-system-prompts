# Banners ad's

This document will describe the process of replicating advertising banners in various formats.

## Original banner ad

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="ad.size" content="300x600">
		<!-- BEGIN CSSFILES -->
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<link rel="stylesheet" type="text/css" href="auto.css"/>
		<link rel="stylesheet" type="text/css" href="custom.css"/>
		<!-- END CSSFILES -->
		<style></style>
</head>
<body>
	<div id="page1" class="container dev">
		<a href="javascript:void(0);" onclick="javascript:window.open(window.clickTag);">
			
			<div id="fundo" class="elemento"><img src="fundo.jpg" id="fundo-anm"></div>

			<div id="produto-circulo" class="elemento"><img src="produto-circulo.png" id="circulo-gira"></div>
			<div id="produto" class="elemento"><img src="produto.png"></div>

			<div id="box-txt-01" class="box-txt box-posit acenter">
				<div id="box-01" class="base-box"></div>
				<div id="txt-mais-01" class="box-txt vcenter"><img src="txt-mais.png"></div>
				<div id="txt-01-1" class="box-txt vcenter"><img src="txt-01-1.png"></div>
				<div id="txt-01-2" class="box-txt vcenter"><img src="txt-01-2.png"></div>
				<div id="txt-01-3" class="box-txt vcenter"><img src="txt-01-3.png"></div>
				<div id="txt-01-4" class="box-txt vcenter"><img src="txt-01-4.png"></div>
			</div>

			<div id="box-txt-02" class="box-txt box-posit acenter">
				<div id="box-02" class="base-box"></div>
				<div id="txt-mais-02" class="box-txt vcenter"><img src="txt-mais.png"></div>
				<div id="txt-02-1" class="box-txt vcenter"><img src="txt-02-1.png"></div>
				<div id="txt-02-2" class="box-txt vcenter"><img src="txt-02-2.png"></div>
			</div>

			<div id="box-txt-03" class="box-txt box-posit acenter">
				<div id="box-03" class="base-box"></div>
				<div id="txt-mais-03" class="box-txt vcenter"><img src="txt-03-mais.png"></div>
				<div id="txt-03-1" class="box-txt vcenter"><img src="txt-03-1.png"></div>
				<div id="txt-03-2" class="box-txt vcenter"><img src="txt-03-2.png"></div>
			</div>

			<div id="loq-lenovo" class="elemento"><img src="loq-lenovo.png"></div>
			<div id="loq-logo" class="elemento"><img src="loq-logo.png"></div>
			<div id="loq-txt-01" class="elemento"><img src="loq-txt-01.png"></div>
			<div id="loq-txt-02" class="elemento"><img src="loq-txt-02.png"></div>

			<div id="logo-lenovo" class="elemento"><img src="logo-lenovo.png"></div>

			<div id="selo-intel" class="elemento"><img src="selo-intel.png"></div>
			<div id="selo-txt-01" class="elemento"><img src="selo-txt-01.png"></div>
			<div id="selo-txt-02" class="elemento"><img src="selo-txt-02.png"></div>

			<div id="blackFx" class="elemento"></div>

			<div class="borda"></div>
		</a>
	</div>

	
	<!-- CLICKTAG JS -->
	<script type="text/javascript">var clickTag = 'http://www.google.com';</script>
	<!-- CLICKTAG JS -->
	
</body>
</html>
```

```css
html, body {
	background-color: #fff;
	height: 100%;
	width: 100%;
	margin: 0px;
}
.container {
	background-color: #010408;
	overflow: hidden;
	display: block;
	width: 300px;
	height: 600px;
	position: absolute;
}

.container.dev {
	/* Esse CSS serve pra visualizar a peça centralizada, dividir a altura e a largura da peça e preencher a baixo */
	transform: translate3d(-50%, -50%, 0);
	left: 50%;
	top: 50%;
}

/* Para colocar borda */
.container .borda {
	box-sizing: border-box;
	border: 1px solid #ccc;
	left: 0px;
	top: 0px;
}
.container .borda,
.container > a {
	position: absolute;
	height: 100%;
	width: 100%;
}
.container > a, .container > a > div {
	position: absolute;
	display: block;
}

/* Pausar animações */

.paused
{
	animation-play-state: paused !important;
}

.paused img.UmsPluginSprite
{
	animation-play-state: paused !important;
}

.paused + .UmsPluginCallToAction
{
	animation-play-state: paused !important;
}

/* class utils */
.flip_horizontal {
	transform: rotateY(-180deg);
	backface-visibility: hidden;
}
.flip_vertical {
	transform: rotateX(-180deg);
	backface-visibility: hidden;
}

/* center classes */
.hcenter
{
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}

.vcenter
{
	position: absolute;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
}

.acenter
{
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
```

```yaml
#MARK: blackFx:
blackFx:
  - delay: 0
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeOut

#MARK: fundo:
fundo:
  - delay: -0.1
    duration: 5
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 1.1
        y: 1.1
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: fundo-anm:
fundo-anm:
  - delay: 1
    duration: 2
    repeat: 6
    direction: alternate
    opacity:
      ini: 1
      end: 0.6
    easing: linear

#MARK: logo-lenovo:
logo-lenovo:
  - delay: 0.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 32
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-lenovo:
loq-lenovo:
  - delay: 0.3
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: -10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-logo:
loq-logo:
  - delay: 0.5
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-01:
loq-txt-01:
  - delay: 0.7
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-02:
loq-txt-02:
  - delay: 0.8
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: produto:
produto:
  - delay: 0.8
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 120
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: produto-circulo:
produto-circulo:
  - delay: 1.3
    duration: 0.9
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 0.3
        y: 0.3
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: circulo-gira:
circulo-gira:
  - delay: 0
    duration: 6
    repeat: 2
    direction: normal
    opacity:
      ini: 1
      end: 1
    rotate:
      ini: 0
      end: 360
    easing: linear

#MARK: selo-intel:
selo-intel:
  - delay: 1.9
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    easing: easeOut

#MARK: selo-txt-01:
selo-txt-01:
  - delay: 2.1
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: selo-txt-02:
selo-txt-02:
  - delay: 2.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: box-txt-01:
box-txt-01:
  - delay: 1.4
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 229
        h: 0
      end:
        w: 229
        h: 53
    easing: easeOutCubic
  - delay: 4.4
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 229
        h: 53
      end:
        w: 229
        h: 0
    easing: easeInCubic

#MARK: txt-mais-01:
txt-mais-01:
  - delay: 1.4
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: txt-01-1:
txt-01-1:
  - delay: 1.5
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-2:
txt-01-2:
  - delay: 1.6
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-3:
txt-01-3:
  - delay: 1.7
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-4:
txt-01-4:
  - delay: 1.8
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: box-txt-02:
box-txt-02:
  - delay: 5
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 229
        h: 0
      end:
        w: 229
        h: 53
    easing: easeOutCubic
  - delay: 8
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 229
        h: 53
      end:
        w: 229
        h: 0
    easing: easeInCubic

#MARK: txt-mais-02:
txt-mais-02:
  - delay: 5
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: txt-02-1:
txt-02-1:
  - delay: 5.1
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-02-2:
txt-02-2:
  - delay: 5.2
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: box-txt-03:
box-txt-03:
  - delay: 8.6
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 210
        h: 0
      end:
        w: 210
        h: 53
    easing: easeOutCubic

#MARK: txt-mais-03:
txt-mais-03:
  - delay: 8.6
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: txt-03-1:
txt-03-1:
  - delay: 8.7
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-03-2:
txt-03-2:
  - delay: 8.8
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic


```

## Conversion to 300x250

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="ad.size" content="300x250">
		<!-- BEGIN CSSFILES -->
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<link rel="stylesheet" type="text/css" href="auto.css"/>
		<link rel="stylesheet" type="text/css" href="custom.css"/>
		<!-- END CSSFILES -->
		<style></style>
</head>
<body>
	<div id="page1" class="container dev">
		<a href="javascript:void(0);" onclick="javascript:window.open(window.clickTag);">
			
			<div id="fundo" class="elemento"><img src="fundo.jpg" id="fundo-anm"></div>

			<div id="produto-circulo" class="elemento"><img src="produto-circulo.png" id="circulo-gira"></div>
			<div id="produto" class="elemento"><img src="produto.png"></div>

			<div id="loq-lenovo" class="elemento"><img src="loq-lenovo.png"></div>
			<div id="loq-logo" class="elemento"><img src="loq-logo.png"></div>
			<div id="loq-txt-01" class="elemento"><img src="loq-txt-01.png"></div>
			<div id="loq-txt-02" class="elemento"><img src="loq-txt-02.png"></div>

			<div id="logo-lenovo" class="elemento"><img src="logo-lenovo.png"></div>

			<div id="selo-intel" class="elemento"><img src="selo-intel.png"></div>
			<div id="selo-txt-01" class="elemento"><img src="selo-txt-01.png"></div>
			<div id="selo-txt-02" class="elemento"><img src="selo-txt-02.png"></div>

			<div id="blackFx" class="elemento"></div>

			<div class="borda"></div>
		</a>
	</div>

	
	<!-- CLICKTAG JS -->
	<script type="text/javascript">var clickTag = 'http://www.google.com';</script>
	<!-- CLICKTAG JS -->
	
</body>
</html>
```

```css
html, body {
	background-color: #fff;
	height: 100%;
	width: 100%;
	margin: 0px;
}
.container {
	background-color: #010408;
	overflow: hidden;
	display: block;
	width: 300px;
	height: 250px;
	position: absolute;
}

.container.dev {
	/* Esse CSS serve pra visualizar a peça centralizada, dividir a altura e a largura da peça e preencher a baixo */
	transform: translate3d(-50%, -50%, 0);
	left: 50%;
	top: 50%;
}

/* Para colocar borda */
.container .borda {
	box-sizing: border-box;
	border: 1px solid #ccc;
	left: 0px;
	top: 0px;
}
.container .borda,
.container > a {
	position: absolute;
	height: 100%;
	width: 100%;
}
.container > a, .container > a > div {
	position: absolute;
	display: block;
}

/* Pausar animações */

.paused
{
	animation-play-state: paused !important;
}

.paused img.UmsPluginSprite
{
	animation-play-state: paused !important;
}

.paused + .UmsPluginCallToAction
{
	animation-play-state: paused !important;
}

/* class utils */
.flip_horizontal {
	transform: rotateY(-180deg);
	backface-visibility: hidden;
}
.flip_vertical {
	transform: rotateX(-180deg);
	backface-visibility: hidden;
}

/* center classes */
.hcenter
{
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}

.vcenter
{
	position: absolute;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
}

.acenter
{
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
```

```yaml
#MARK: blackFx:
blackFx:
  - delay: 0
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeOut

#MARK: fundo:
fundo:
  - delay: -0.1
    duration: 5
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 1.1
        y: 1.1
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: fundo-anm:
fundo-anm:
  - delay: 1
    duration: 2
    repeat: 6
    direction: alternate
    opacity:
      ini: 1
      end: 0.6
    easing: linear

#MARK: logo-lenovo:
logo-lenovo:
  - delay: 0.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 32
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-lenovo:
loq-lenovo:
  - delay: 0.3
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: -10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-logo:
loq-logo:
  - delay: 0.5
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-01:
loq-txt-01:
  - delay: 0.7
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-02:
loq-txt-02:
  - delay: 0.8
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: produto:
produto:
  - delay: 0.8
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 215
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: produto-circulo:
produto-circulo:
  - delay: 1.1
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 0.3
        y: 0.3
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: circulo-gira:
circulo-gira:
  - delay: 0
    duration: 6
    repeat: 2
    direction: normal
    opacity:
      ini: 1
      end: 1
    rotate:
      ini: 0
      end: 360
    easing: linear

#MARK: selo-intel:
selo-intel:
  - delay: 1.9
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    easing: easeOut

#MARK: selo-txt-01:
selo-txt-01:
  - delay: 2.1
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: selo-txt-02:
selo-txt-02:
  - delay: 2.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint


```

## Conversion to 300x50

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="ad.size" content="300x50">
		<!-- BEGIN CSSFILES -->
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<link rel="stylesheet" type="text/css" href="auto.css"/>
		<link rel="stylesheet" type="text/css" href="custom.css"/>
		<!-- END CSSFILES -->
		<style></style>
</head>
<body>
	<div id="page1" class="container dev">
		<a href="javascript:void(0);" onclick="javascript:window.open(window.clickTag);">
			
			<div id="fundo" class="elemento"><img src="fundo.jpg" id="fundo-anm"></div>

			<div id="produto-circulo" class="elemento"><img src="produto-circulo.png" id="circulo-gira"></div>
			<div id="produto" class="elemento"><img src="produto.png"></div>

			<div id="loq-lenovo" class="elemento"><img src="loq-lenovo.png"></div>
			<div id="loq-logo" class="elemento"><img src="loq-logo.png"></div>
			<div id="loq-txt-01" class="elemento"><img src="loq-txt-01.png"></div>
			<div id="loq-txt-02" class="elemento"><img src="loq-txt-02.png"></div>

			<div id="logo-lenovo" class="elemento"><img src="logo-lenovo.png"></div>

			<div id="selo-intel" class="elemento"><img src="selo-intel.png"></div>
			<div id="selo-txt-01" class="elemento"><img src="selo-txt-01.png"></div>
			<div id="selo-txt-02" class="elemento"><img src="selo-txt-02.png"></div>

			<div id="blackFx" class="elemento"></div>

			<div class="borda"></div>
		</a>
	</div>

	
	<!-- CLICKTAG JS -->
	<script type="text/javascript">var clickTag = 'http://www.google.com';</script>
	<!-- CLICKTAG JS -->
	
</body>
</html>
```

```css
html, body {
	background-color: #fff;
	height: 100%;
	width: 100%;
	margin: 0px;
}
.container {
	background-color: #010408;
	overflow: hidden;
	display: block;
	width: 300px;
	height: 50px;
	position: absolute;
}

.container.dev {
	/* Esse CSS serve pra visualizar a peça centralizada, dividir a altura e a largura da peça e preencher a baixo */
	transform: translate3d(-50%, -50%, 0);
	left: 50%;
	top: 50%;
}

/* Para colocar borda */
.container .borda {
	box-sizing: border-box;
	border: 1px solid #ccc;
	left: 0px;
	top: 0px;
}
.container .borda,
.container > a {
	position: absolute;
	height: 100%;
	width: 100%;
}
.container > a, .container > a > div {
	position: absolute;
	display: block;
}

/* Pausar animações */

.paused
{
	animation-play-state: paused !important;
}

.paused img.UmsPluginSprite
{
	animation-play-state: paused !important;
}

.paused + .UmsPluginCallToAction
{
	animation-play-state: paused !important;
}

/* class utils */
.flip_horizontal {
	transform: rotateY(-180deg);
	backface-visibility: hidden;
}
.flip_vertical {
	transform: rotateX(-180deg);
	backface-visibility: hidden;
}

/* center classes */
.hcenter
{
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}

.vcenter
{
	position: absolute;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
}

.acenter
{
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
```

```yaml
#MARK: blackFx:
blackFx:
  - delay: 0
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeOut

#MARK: fundo:
fundo:
  - delay: -0.1
    duration: 5
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 1.1
        y: 1.1
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: fundo-anm:
fundo-anm:
  - delay: 1
    duration: 2
    repeat: 6
    direction: alternate
    opacity:
      ini: 1
      end: 0.6
    easing: linear

#MARK: logo-lenovo:
logo-lenovo:
  - delay: 0.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 32
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-lenovo:
loq-lenovo:
  - delay: 0.3
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: -10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-logo:
loq-logo:
  - delay: 0.5
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-01:
loq-txt-01:
  - delay: 0.7
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-02:
loq-txt-02:
  - delay: 0.8
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: produto:
produto:
  - delay: 0.8
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: produto-circulo:
produto-circulo:
  - delay: 1.1
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 0.3
        y: 0.3
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: circulo-gira:
circulo-gira:
  - delay: 0
    duration: 6
    repeat: 2
    direction: normal
    opacity:
      ini: 1
      end: 1
    rotate:
      ini: 0
      end: 360
    easing: linear

#MARK: selo-intel:
selo-intel:
  - delay: 1.9
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    easing: easeOut

#MARK: selo-txt-01:
selo-txt-01:
  - delay: 2.1
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: selo-txt-02:
selo-txt-02:
  - delay: 2.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint


```

## Conversion to 728x90

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="ad.size" content="728x90">
		<!-- BEGIN CSSFILES -->
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<link rel="stylesheet" type="text/css" href="auto.css"/>
		<link rel="stylesheet" type="text/css" href="custom.css"/>
		<!-- END CSSFILES -->
		<style></style>
</head>
<body>
	<div id="page1" class="container dev">
		<a href="javascript:void(0);" onclick="javascript:window.open(window.clickTag);">
			
			<div id="fundo" class="elemento"><img src="fundo.jpg" id="fundo-anm"></div>

			<div id="produto-circulo" class="elemento"><img src="produto-circulo.png" id="circulo-gira"></div>
			<div id="produto" class="elemento"><img src="produto.png"></div>

			<div id="box-txt-01" class="box-txt box-posit vcenter">
				<div id="box-01" class="base-box"></div>
				<div id="txt-mais-01" class="box-txt vcenter"><img src="txt-mais.png"></div>
				<div id="txt-01-1" class="box-txt vcenter"><img src="txt-01-1.png"></div>
				<div id="txt-01-2" class="box-txt vcenter"><img src="txt-01-2.png"></div>
				<div id="txt-01-3" class="box-txt vcenter"><img src="txt-01-3.png"></div>
				<div id="txt-01-4" class="box-txt vcenter"><img src="txt-01-4.png"></div>
			</div>

			<div id="box-txt-02" class="box-txt box-posit vcenter">
				<div id="box-02" class="base-box"></div>
				<div id="txt-mais-02" class="box-txt vcenter"><img src="txt-mais.png"></div>
				<div id="txt-02-1" class="box-txt vcenter"><img src="txt-02-1.png"></div>
				<div id="txt-02-2" class="box-txt vcenter"><img src="txt-02-2.png"></div>
				<div id="txt-02-3" class="box-txt vcenter"><img src="txt-02-3.png"></div>
				<div id="txt-02-4" class="box-txt vcenter"><img src="txt-02-4.png"></div>
			</div>

			<div id="box-txt-03" class="box-txt box-posit vcenter">
				<div id="box-03" class="base-box"></div>
				<div id="txt-mais-03" class="box-txt vcenter"><img src="txt-mais.png"></div>
				<div id="txt-03-1" class="box-txt vcenter"><img src="txt-03-1.png"></div>
				<div id="txt-03-2" class="box-txt vcenter"><img src="txt-03-2.png"></div>
				<div id="txt-03-3" class="box-txt vcenter"><img src="txt-03-3.png"></div>
			</div>

			<div id="loq-lenovo" class="elemento"><img src="loq-lenovo.png"></div>
			<div id="loq-logo" class="elemento"><img src="loq-logo.png"></div>
			<div id="loq-txt-01" class="elemento"><img src="loq-txt-01.png"></div>
			<div id="loq-txt-02" class="elemento"><img src="loq-txt-02.png"></div>

			<div id="logo-lenovo" class="elemento"><img src="logo-lenovo.png"></div>

			<div id="selo-intel" class="elemento"><img src="selo-intel.png"></div>
			<div id="selo-txt-01" class="elemento"><img src="selo-txt-01.png"></div>
			<div id="selo-txt-02" class="elemento"><img src="selo-txt-02.png"></div>

			<div id="blackFx" class="elemento"></div>

			<div class="borda"></div>
		</a>
	</div>

	
	<!-- CLICKTAG JS -->
	<script type="text/javascript">var clickTag = 'http://www.google.com';</script>
	<!-- CLICKTAG JS -->
	
</body>
</html>
```

```css
html, body {
	background-color: #fff;
	height: 100%;
	width: 100%;
	margin: 0px;
}
.container {
	background-color: #010408;
	overflow: hidden;
	display: block;
	width: 728px;
	height: 90px;
	position: absolute;
}

.container.dev {
	/* Esse CSS serve pra visualizar a peça centralizada, dividir a altura e a largura da peça e preencher a baixo */
	transform: translate3d(-50%, -50%, 0);
	left: 50%;
	top: 50%;
}

/* Para colocar borda */
.container .borda {
	box-sizing: border-box;
	border: 1px solid #ccc;
	left: 0px;
	top: 0px;
}
.container .borda,
.container > a {
	position: absolute;
	height: 100%;
	width: 100%;
}
.container > a, .container > a > div {
	position: absolute;
	display: block;
}

/* Pausar animações */

.paused
{
	animation-play-state: paused !important;
}

.paused img.UmsPluginSprite
{
	animation-play-state: paused !important;
}

.paused + .UmsPluginCallToAction
{
	animation-play-state: paused !important;
}

/* class utils */
.flip_horizontal {
	transform: rotateY(-180deg);
	backface-visibility: hidden;
}
.flip_vertical {
	transform: rotateX(-180deg);
	backface-visibility: hidden;
}

/* center classes */
.hcenter
{
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}

.vcenter
{
	position: absolute;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
}

.acenter
{
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
```

```yaml
#MARK: blackFx:
blackFx:
  - delay: 0
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeOut

#MARK: fundo:
fundo:
  - delay: -0.1
    duration: 5
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 1.1
        y: 1.1
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: fundo-anm:
fundo-anm:
  - delay: 1
    duration: 2
    repeat: 6
    direction: alternate
    opacity:
      ini: 1
      end: 0.6
    easing: linear

#MARK: logo-lenovo:
logo-lenovo:
  - delay: 0.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 32
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-lenovo:
loq-lenovo:
  - delay: 0.3
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: -10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-logo:
loq-logo:
  - delay: 0.5
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 10
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-01:
loq-txt-01:
  - delay: 0.7
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: loq-txt-02:
loq-txt-02:
  - delay: 0.8
    duration: 1.2
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 30
      y: 0
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: produto:
produto:
  - delay: 0.8
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 90
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: produto-circulo:
produto-circulo:
  - delay: 1.1
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 0.3
        y: 0.3
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: circulo-gira:
circulo-gira:
  - delay: 0
    duration: 6
    repeat: 2
    direction: normal
    opacity:
      ini: 1
      end: 1
    rotate:
      ini: 0
      end: 360
    easing: linear

#MARK: selo-intel:
selo-intel:
  - delay: 1.9
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    easing: easeOut

#MARK: selo-txt-01:
selo-txt-01:
  - delay: 2.1
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: selo-txt-02:
selo-txt-02:
  - delay: 2.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 5
    move:
      x: 0
      y: 0
    easing: easeOutQuint

#MARK: box-txt-01:
box-txt-01:
  - delay: 1.4
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 179
        h: 0
      end:
        w: 179
        h: 65
    easing: easeOutCubic
  - delay: 4.4
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 179
        h: 65
      end:
        w: 179
        h: 0
    easing: easeInCubic

#MARK: txt-mais-01:
txt-mais-01:
  - delay: 1.4
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: txt-01-1:
txt-01-1:
  - delay: 1.5
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-2:
txt-01-2:
  - delay: 1.6
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-3:
txt-01-3:
  - delay: 1.7
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-4:
txt-01-4:
  - delay: 1.8
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: box-txt-02:
box-txt-02:
  - delay: 5
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 179
        h: 0
      end:
        w: 179
        h: 65
    easing: easeOutCubic
  - delay: 8
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 179
        h: 65
      end:
        w: 179
        h: 0
    easing: easeInCubic

#MARK: txt-mais-02:
txt-mais-02:
  - delay: 5
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: txt-02-1:
txt-02-1:
  - delay: 5.1
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-02-2:
txt-02-2:
  - delay: 5.2
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-02-3:
txt-02-3:
  - delay: 5.3
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-02-4:
txt-02-4:
  - delay: 5.4
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: box-txt-03:
box-txt-03:
  - delay: 8.6
    duration: 0.6
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    resize:
      ini:
        w: 179
        h: 0
      end:
        w: 179
        h: 65
    easing: easeOutCubic

#MARK: txt-mais-03:
txt-mais-03:
  - delay: 8.6
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOutCubic

#MARK: txt-03-1:
txt-03-1:
  - delay: 8.7
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-03-2:
txt-03-2:
  - delay: 8.8
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-03-3:
txt-03-3:
  - delay: 8.9
    duration: 0.7
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    init:
      x: 0
      y: 20
    move:
      x: 0
      y: 0
    easing: easeOutCubic


```
## Objectives

- All examples above are for reference only.
- The user will provide you with the "master" content to be replicated at a new size.
- Your response should be the new HTML, CSS and YAML files with their appropriate size adaptations.