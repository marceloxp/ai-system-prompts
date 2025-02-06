# Banners ad's replication

## Original banner ad

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="ad.size" content="300x450">
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

			<!-- Step 01 -->
			<div id="fundo-01" class="elemento"><img src="fundo-01.jpg"></div>
			<div id="logo" class="elemento zIndexCinco"><img src="logo.png"></div>

			<div id="txt-01-01" class="elemento"><img src="txt-01-01.png"></div>
			<div id="txt-01-02" class="elemento"><img src="txt-01-02.png"></div>
			
			<!-- Step 01 -->
			<div id="fundo-02" class="elemento"><img src="fundo-02.jpg"></div>

			<div id="txt-02-01" class="elemento"><img src="txt-02-01.png"></div>
			<div id="txt-02-02" class="elemento"><img src="txt-02-02.png"></div>
			<div id="txt-02-03" class="elemento"><img src="txt-02-03.png"></div>

			<!-- Step 03 -->
			<div id="fundo-03" class="elemento"><img src="fundo-03.jpg"></div>

			<div id="txt-03-01" class="elemento"><img src="txt-03-01.png"></div>
			<div id="txt-03-02" class="elemento"><img src="txt-03-02.png"></div>

			<!-- Step 04 -->
			<div id="txt-04-01" class="elemento"><img src="txt-04-01.png"></div>
			<div id="txt-04-02" class="elemento"><img src="txt-04-02.png"></div>

			<div id="txt-legal" class="elemento"><img src="txt-legal.png"></div>
			<div id="btn" class="elemento"><img src="btn.png"></div>

			<div id="efx" class="elemento"></div>

			<div class="borda"></div>
		</a>
	</div>

	<!-- SCRIPTS CLICKTAG -->
	<script type="text/javascript">
		var clickTag = 'http://www.google.com';
	</script>

	
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
	overflow: hidden;
	display: block;
	background-color: #000;
	width: 300px;
	height: 450px;
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
#MARK: efx:
efx:
  - delay: 0
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeOut

#MARK: fundo-01:
fundo-01:
  - delay: 0
    duration: 5
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 1
    scale:
      ini:
        x: 1.2
        y: 1.2
      end:
        x: 1
        y: 1
    easing: easeOut
  - delay: 2.3
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeIn

#MARK: logo:
logo:
  - delay: 0.6
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 40
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-01-01:
txt-01-01:
  - delay: 0.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 40
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 2.3
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: txt-01-02:
txt-01-02:
  - delay: 0.4
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 40
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 2.4
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: fundo-02:
fundo-02:
  - delay: 2.6
    duration: 3
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
    easing: easeOut
  - delay: 5.9
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    easing: easeIn

#MARK: txt-02-01:
txt-02-01:
  - delay: 3
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 5.8
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: txt-02-02:
txt-02-02:
  - delay: 3.2
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 5.9
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: txt-02-03:
txt-02-03:
  - delay: 3.4
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 6
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: fundo-03:
fundo-03:
  - delay: 6
    duration: 3
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
    easing: easeOut

#MARK: txt-03-01:
txt-03-01:
  - delay: 6.4
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 8.8
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: txt-03-02:
txt-03-02:
  - delay: 6.6
    duration: 0.8
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic
  - delay: 8.9
    duration: 0.4
    repeat: 1
    direction: normal
    opacity:
      ini: 1
      end: 0
    init:
      x: 0
      y: 0
    move:
      x: 0
      y: -50
    easing: easeInCubic

#MARK: txt-04-01:
txt-04-01:
  - delay: 9.3
    duration: 0.5
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-04-02:
txt-04-02:
  - delay: 9.4
    duration: 0.5
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: btn:
btn:
  - delay: 9.8
    duration: 0.5
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    init:
      x: 0
      y: 50
    move:
      x: 0
      y: 0
    easing: easeOutCubic

#MARK: txt-legal:
txt-legal:
  - delay: 10.1
    duration: 1
    repeat: 1
    direction: normal
    opacity:
      ini: 0
      end: 1
    easing: easeOutQuint


```

## New banner with size 336x450
