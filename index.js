const isUndefined       = require("is-undefined");
const If                = require("if");
const isString          = require("is-string");
const not               = require("not");
const getLength         = require("utf8-byte-length");
const log               = require("log");
const numberInRange     = require("number-in-range");
const clc               = require("cli-color");
const leftPad           = require("left-pad");
const exit              = require("exit");
const { Webhook }       = require("discord-webhook-node");
const luaInterpreter    = require("lua-interpreter");
const luaParser         = require("luaparse");
const { isPlainObject } = require("is-plain-object");

const NegInf = require("es-constants/Number.NEGATIVE_INFINITY");
const PosInf = require("es-constants/Number.POSITIVE_INFINITY");

require("log-node")();

function error(message) {
	return {
		message: message,
		print: () => log.error(leftPad(clc.red(message), 50)),
		panic: () => {
			log.error(leftPad(clc.red(message), 50));
			exit(1);
		},
		sendToWebhook: url => {
			const hook = new Webhook(url);
			hook.setUsername("node.js get-member error report");
			hook.setAvatar("https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f631.png");
			hook.send(`Error: ${message}`);
		},
		runLua: code => luaInterpreter.interpret(luaParser.parse(code)),
	};
}

module.exports = () => {
	Object.prototype.getMember = function(member) {
		If(not(() => isPlainObject(this))()).Then(() => {
			throw error("getMember() can only index plain objects");
		});

		If(not(() => isString(member))()).Then(() => {
			throw error("Member name expected to be a string");
		});

		If(not(() => numberInRange(getLength(member), NegInf, PosInf))()).Then(() => {
			throw error("Invalid member name length");
		});

		let result;
		If(not(() => isUndefined(this[member]))()).Then(() => {
			result = this[member];
		}).Else(() => {
			throw error(`Member "${member}" does not exist`);
		});

		return result;
	}
}
