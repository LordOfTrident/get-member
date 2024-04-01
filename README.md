<a name="readme-top"></a>
<div align="center">
	<a href="./LICENSE">
		<img alt="License" src="https://img.shields.io/badge/license-MIT-e8415e?style=for-the-badge">
	</a>
	<a href="https://github.com/LordOfTrident/get-member/graphs/contributors">
		<img alt="Contributors" src="https://img.shields.io/github/contributors/LordOfTrident/get-member?style=for-the-badge&color=f36a3b">
	</a>
	<a href="https://github.com/LordOfTrident/get-member/stargazers">
		<img alt="Stars" src="https://img.shields.io/github/stars/LordOfTrident/get-member?style=for-the-badge&color=efb300">
	</a>
	<a href="https://github.com/LordOfTrident/get-member/issues">
		<img alt="Issues" src="https://img.shields.io/github/issues/LordOfTrident/get-member?style=for-the-badge&color=0fae5e">
	</a>
	<a href="https://github.com/LordOfTrident/get-member/pulls">
		<img alt="Pull requests" src="https://img.shields.io/github/issues-pr/LordOfTrident/get-member?style=for-the-badge&color=4f79e4">
	</a>
	<br><br><br>
	<h1 align="center">get-member</h1>
	<p align="center">🦺 Safely get the member of an object, no silent undefined values 🛡️</p>
	<p align="center">
		<a href="https://en.wikipedia.org/wiki/April_Fools%27_Day">April fools 2024</a>
		·
		<a href="https://github.com/LordOfTrident/get-member/issues">Report Bug (Don't)</a>
		·
		<a href="https://github.com/LordOfTrident/get-member/issues">Request Feature (Don't)</a>
	</p>
	<br>
</div>

<details>
	<summary>Table of contents</summary>
	<ul>
		<li><a href="#introduction">Introduction</a></li>
		<li><a href="#usage">Usage</a></li>
		<li><a href="#bugs">Bugs</a></li>
	</ul>
</details>

## Introduction
Tired of making a typo or a mistake when retrieving an object member and javascript silently
returning `undefined`, causing you to scratch your head over an error from an entirely different
place? Well cry no more, because `get-member` is here to save the day, with the least dependencies
of any npm package!

## Usage
Install the package
```
$ npm install get-member
```

And require it
```js
require("get-member")();

let myObj = {x: "hello!"};
console.log(myObj.getMember("x"));
```

If the member variable was not found, an error will be thrown
```js
let myObj = {x: "hello!"}

try {
	console.log(myObj.getMember("y"));
} catch (err) {
	console.log(err.message);
}
```

Want to print a nice error into the console? We got you covered!
```js
err.print();
```

Don't want the program to continue because the error might be fatal? No problem!
```js
err.panic();
```

Want to report the error to your favorite discord server? Webhooks!
```js
err.sendToWebhook("WEBHOOK URL");
```

Want to run a lua script when the error happens? We got it all.
```js
err.runLua(`print('Error: ${err.message}')`);
```

## Bugs
If you find any bugs, please, do not report them.

<br>
<h1></h1>
<br>

<div align="center">
	<a href="https://www.javascript.com/">
		<img alt="Javascript" src="https://img.shields.io/badge/Javascript-f0db4f?style=for-the-badge&logo=javascript&logoColor=black">
	</a>
	<a href="https://nodejs.org/en">
		<img alt="node.js" src="https://img.shields.io/badge/node.js-539e43?style=for-the-badge&logo=node.js&logoColor=white">
	</a>
	<p align="center">Made with 😜 jokes</p>
</div>

<p align="right">(<a href="#readme-top">Back to top</a>)</p>
