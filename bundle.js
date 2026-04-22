#!/usr/bin/env node
/*! create-rue v0.0.4 | MIT */
import { createRequire } from "node:module";
import * as fs from "node:fs";
import "node:fs";
import * as path$1 from "node:path";
import "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parseArgs, stripVTControlCharacters, styleText } from "node:util";
import P, { stdin, stdout } from "node:process";
import "node:readline";
import P$1 from "node:readline";
import "node:tty";
import * as path from "path";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ createRequire(import.meta.url);
//#endregion
//#region node_modules/.pnpm/fast-string-truncated-width@1.2.1/node_modules/fast-string-truncated-width/dist/utils.js
const isAmbiguous = (x) => {
	return x === 161 || x === 164 || x === 167 || x === 168 || x === 170 || x === 173 || x === 174 || x >= 176 && x <= 180 || x >= 182 && x <= 186 || x >= 188 && x <= 191 || x === 198 || x === 208 || x === 215 || x === 216 || x >= 222 && x <= 225 || x === 230 || x >= 232 && x <= 234 || x === 236 || x === 237 || x === 240 || x === 242 || x === 243 || x >= 247 && x <= 250 || x === 252 || x === 254 || x === 257 || x === 273 || x === 275 || x === 283 || x === 294 || x === 295 || x === 299 || x >= 305 && x <= 307 || x === 312 || x >= 319 && x <= 322 || x === 324 || x >= 328 && x <= 331 || x === 333 || x === 338 || x === 339 || x === 358 || x === 359 || x === 363 || x === 462 || x === 464 || x === 466 || x === 468 || x === 470 || x === 472 || x === 474 || x === 476 || x === 593 || x === 609 || x === 708 || x === 711 || x >= 713 && x <= 715 || x === 717 || x === 720 || x >= 728 && x <= 731 || x === 733 || x === 735 || x >= 768 && x <= 879 || x >= 913 && x <= 929 || x >= 931 && x <= 937 || x >= 945 && x <= 961 || x >= 963 && x <= 969 || x === 1025 || x >= 1040 && x <= 1103 || x === 1105 || x === 8208 || x >= 8211 && x <= 8214 || x === 8216 || x === 8217 || x === 8220 || x === 8221 || x >= 8224 && x <= 8226 || x >= 8228 && x <= 8231 || x === 8240 || x === 8242 || x === 8243 || x === 8245 || x === 8251 || x === 8254 || x === 8308 || x === 8319 || x >= 8321 && x <= 8324 || x === 8364 || x === 8451 || x === 8453 || x === 8457 || x === 8467 || x === 8470 || x === 8481 || x === 8482 || x === 8486 || x === 8491 || x === 8531 || x === 8532 || x >= 8539 && x <= 8542 || x >= 8544 && x <= 8555 || x >= 8560 && x <= 8569 || x === 8585 || x >= 8592 && x <= 8601 || x === 8632 || x === 8633 || x === 8658 || x === 8660 || x === 8679 || x === 8704 || x === 8706 || x === 8707 || x === 8711 || x === 8712 || x === 8715 || x === 8719 || x === 8721 || x === 8725 || x === 8730 || x >= 8733 && x <= 8736 || x === 8739 || x === 8741 || x >= 8743 && x <= 8748 || x === 8750 || x >= 8756 && x <= 8759 || x === 8764 || x === 8765 || x === 8776 || x === 8780 || x === 8786 || x === 8800 || x === 8801 || x >= 8804 && x <= 8807 || x === 8810 || x === 8811 || x === 8814 || x === 8815 || x === 8834 || x === 8835 || x === 8838 || x === 8839 || x === 8853 || x === 8857 || x === 8869 || x === 8895 || x === 8978 || x >= 9312 && x <= 9449 || x >= 9451 && x <= 9547 || x >= 9552 && x <= 9587 || x >= 9600 && x <= 9615 || x >= 9618 && x <= 9621 || x === 9632 || x === 9633 || x >= 9635 && x <= 9641 || x === 9650 || x === 9651 || x === 9654 || x === 9655 || x === 9660 || x === 9661 || x === 9664 || x === 9665 || x >= 9670 && x <= 9672 || x === 9675 || x >= 9678 && x <= 9681 || x >= 9698 && x <= 9701 || x === 9711 || x === 9733 || x === 9734 || x === 9737 || x === 9742 || x === 9743 || x === 9756 || x === 9758 || x === 9792 || x === 9794 || x === 9824 || x === 9825 || x >= 9827 && x <= 9829 || x >= 9831 && x <= 9834 || x === 9836 || x === 9837 || x === 9839 || x === 9886 || x === 9887 || x === 9919 || x >= 9926 && x <= 9933 || x >= 9935 && x <= 9939 || x >= 9941 && x <= 9953 || x === 9955 || x === 9960 || x === 9961 || x >= 9963 && x <= 9969 || x === 9972 || x >= 9974 && x <= 9977 || x === 9979 || x === 9980 || x === 9982 || x === 9983 || x === 10045 || x >= 10102 && x <= 10111 || x >= 11094 && x <= 11097 || x >= 12872 && x <= 12879 || x >= 57344 && x <= 63743 || x >= 65024 && x <= 65039 || x === 65533 || x >= 127232 && x <= 127242 || x >= 127248 && x <= 127277 || x >= 127280 && x <= 127337 || x >= 127344 && x <= 127373 || x === 127375 || x === 127376 || x >= 127387 && x <= 127404 || x >= 917760 && x <= 917999 || x >= 983040 && x <= 1048573 || x >= 1048576 && x <= 1114109;
};
const isFullWidth = (x) => {
	return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
};
const isWide = (x) => {
	return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9800 && x <= 9811 || x === 9855 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12771 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 19903 || x >= 19968 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x === 94192 || x === 94193 || x >= 94208 && x <= 100343 || x >= 100352 && x <= 101589 || x >= 101632 && x <= 101640 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128727 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129672 || x >= 129680 && x <= 129725 || x >= 129727 && x <= 129733 || x >= 129742 && x <= 129755 || x >= 129760 && x <= 129768 || x >= 129776 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
};
//#endregion
//#region node_modules/.pnpm/fast-string-truncated-width@1.2.1/node_modules/fast-string-truncated-width/dist/index.js
const ANSI_RE = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y;
const CONTROL_RE = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
const TAB_RE = /\t{1,1000}/y;
const EMOJI_RE = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/uy;
const LATIN_RE = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
const MODIFIER_RE = /\p{M}+/gu;
const NO_TRUNCATION$1 = {
	limit: Infinity,
	ellipsis: ""
};
const getStringTruncatedWidth = (input, truncationOptions = {}, widthOptions = {}) => {
	const LIMIT = truncationOptions.limit ?? Infinity;
	const ELLIPSIS = truncationOptions.ellipsis ?? "";
	const ELLIPSIS_WIDTH = truncationOptions?.ellipsisWidth ?? (ELLIPSIS ? getStringTruncatedWidth(ELLIPSIS, NO_TRUNCATION$1, widthOptions).width : 0);
	const ANSI_WIDTH = widthOptions.ansiWidth ?? 0;
	const CONTROL_WIDTH = widthOptions.controlWidth ?? 0;
	const TAB_WIDTH = widthOptions.tabWidth ?? 8;
	const AMBIGUOUS_WIDTH = widthOptions.ambiguousWidth ?? 1;
	const EMOJI_WIDTH = widthOptions.emojiWidth ?? 2;
	const FULL_WIDTH_WIDTH = widthOptions.fullWidthWidth ?? 2;
	const REGULAR_WIDTH = widthOptions.regularWidth ?? 1;
	const WIDE_WIDTH = widthOptions.wideWidth ?? 2;
	let indexPrev = 0;
	let index = 0;
	let length = input.length;
	let lengthExtra = 0;
	let truncationEnabled = false;
	let truncationIndex = length;
	let truncationLimit = Math.max(0, LIMIT - ELLIPSIS_WIDTH);
	let unmatchedStart = 0;
	let unmatchedEnd = 0;
	let width = 0;
	let widthExtra = 0;
	outer: while (true) {
		if (unmatchedEnd > unmatchedStart || index >= length && index > indexPrev) {
			const unmatched = input.slice(unmatchedStart, unmatchedEnd) || input.slice(indexPrev, index);
			lengthExtra = 0;
			for (const char of unmatched.replaceAll(MODIFIER_RE, "")) {
				const codePoint = char.codePointAt(0) || 0;
				if (isFullWidth(codePoint)) widthExtra = FULL_WIDTH_WIDTH;
				else if (isWide(codePoint)) widthExtra = WIDE_WIDTH;
				else if (AMBIGUOUS_WIDTH !== REGULAR_WIDTH && isAmbiguous(codePoint)) widthExtra = AMBIGUOUS_WIDTH;
				else widthExtra = REGULAR_WIDTH;
				if (width + widthExtra > truncationLimit) truncationIndex = Math.min(truncationIndex, Math.max(unmatchedStart, indexPrev) + lengthExtra);
				if (width + widthExtra > LIMIT) {
					truncationEnabled = true;
					break outer;
				}
				lengthExtra += char.length;
				width += widthExtra;
			}
			unmatchedStart = unmatchedEnd = 0;
		}
		if (index >= length) break;
		LATIN_RE.lastIndex = index;
		if (LATIN_RE.test(input)) {
			lengthExtra = LATIN_RE.lastIndex - index;
			widthExtra = lengthExtra * REGULAR_WIDTH;
			if (width + widthExtra > truncationLimit) truncationIndex = Math.min(truncationIndex, index + Math.floor((truncationLimit - width) / REGULAR_WIDTH));
			if (width + widthExtra > LIMIT) {
				truncationEnabled = true;
				break;
			}
			width += widthExtra;
			unmatchedStart = indexPrev;
			unmatchedEnd = index;
			index = indexPrev = LATIN_RE.lastIndex;
			continue;
		}
		ANSI_RE.lastIndex = index;
		if (ANSI_RE.test(input)) {
			if (width + ANSI_WIDTH > truncationLimit) truncationIndex = Math.min(truncationIndex, index);
			if (width + ANSI_WIDTH > LIMIT) {
				truncationEnabled = true;
				break;
			}
			width += ANSI_WIDTH;
			unmatchedStart = indexPrev;
			unmatchedEnd = index;
			index = indexPrev = ANSI_RE.lastIndex;
			continue;
		}
		CONTROL_RE.lastIndex = index;
		if (CONTROL_RE.test(input)) {
			lengthExtra = CONTROL_RE.lastIndex - index;
			widthExtra = lengthExtra * CONTROL_WIDTH;
			if (width + widthExtra > truncationLimit) truncationIndex = Math.min(truncationIndex, index + Math.floor((truncationLimit - width) / CONTROL_WIDTH));
			if (width + widthExtra > LIMIT) {
				truncationEnabled = true;
				break;
			}
			width += widthExtra;
			unmatchedStart = indexPrev;
			unmatchedEnd = index;
			index = indexPrev = CONTROL_RE.lastIndex;
			continue;
		}
		TAB_RE.lastIndex = index;
		if (TAB_RE.test(input)) {
			lengthExtra = TAB_RE.lastIndex - index;
			widthExtra = lengthExtra * TAB_WIDTH;
			if (width + widthExtra > truncationLimit) truncationIndex = Math.min(truncationIndex, index + Math.floor((truncationLimit - width) / TAB_WIDTH));
			if (width + widthExtra > LIMIT) {
				truncationEnabled = true;
				break;
			}
			width += widthExtra;
			unmatchedStart = indexPrev;
			unmatchedEnd = index;
			index = indexPrev = TAB_RE.lastIndex;
			continue;
		}
		EMOJI_RE.lastIndex = index;
		if (EMOJI_RE.test(input)) {
			if (width + EMOJI_WIDTH > truncationLimit) truncationIndex = Math.min(truncationIndex, index);
			if (width + EMOJI_WIDTH > LIMIT) {
				truncationEnabled = true;
				break;
			}
			width += EMOJI_WIDTH;
			unmatchedStart = indexPrev;
			unmatchedEnd = index;
			index = indexPrev = EMOJI_RE.lastIndex;
			continue;
		}
		index += 1;
	}
	return {
		width: truncationEnabled ? truncationLimit : width,
		index: truncationEnabled ? truncationIndex : length,
		truncated: truncationEnabled,
		ellipsed: truncationEnabled && LIMIT >= ELLIPSIS_WIDTH
	};
};
//#endregion
//#region node_modules/.pnpm/fast-string-width@1.1.0/node_modules/fast-string-width/dist/index.js
const NO_TRUNCATION = {
	limit: Infinity,
	ellipsis: "",
	ellipsisWidth: 0
};
const fastStringWidth = (input, options = {}) => {
	return getStringTruncatedWidth(input, NO_TRUNCATION, options).width;
};
//#endregion
//#region node_modules/.pnpm/fast-wrap-ansi@0.1.6/node_modules/fast-wrap-ansi/lib/main.js
const ESC = "\x1B";
const CSI = "";
const END_CODE = 39;
const ANSI_ESCAPE_BELL = "\x07";
const ANSI_CSI = "[";
const ANSI_OSC = "]";
const ANSI_SGR_TERMINATOR = "m";
const ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
const GROUP_REGEX = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`, "y");
const getClosingCode = (openingCode) => {
	if (openingCode >= 30 && openingCode <= 37) return 39;
	if (openingCode >= 90 && openingCode <= 97) return 39;
	if (openingCode >= 40 && openingCode <= 47) return 49;
	if (openingCode >= 100 && openingCode <= 107) return 49;
	if (openingCode === 1 || openingCode === 2) return 22;
	if (openingCode === 3) return 23;
	if (openingCode === 4) return 24;
	if (openingCode === 7) return 27;
	if (openingCode === 8) return 28;
	if (openingCode === 9) return 29;
	if (openingCode === 0) return 0;
};
const wrapAnsiCode = (code) => `${ESC}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
const wrapAnsiHyperlink = (url) => `${ESC}${ANSI_ESCAPE_LINK}${url}${ANSI_ESCAPE_BELL}`;
const wrapWord = (rows, word, columns) => {
	const characters = word[Symbol.iterator]();
	let isInsideEscape = false;
	let isInsideLinkEscape = false;
	let lastRow = rows.at(-1);
	let visible = lastRow === void 0 ? 0 : fastStringWidth(lastRow);
	let currentCharacter = characters.next();
	let nextCharacter = characters.next();
	let rawCharacterIndex = 0;
	while (!currentCharacter.done) {
		const character = currentCharacter.value;
		const characterLength = fastStringWidth(character);
		if (visible + characterLength <= columns) rows[rows.length - 1] += character;
		else {
			rows.push(character);
			visible = 0;
		}
		if (character === ESC || character === CSI) {
			isInsideEscape = true;
			isInsideLinkEscape = word.startsWith(ANSI_ESCAPE_LINK, rawCharacterIndex + 1);
		}
		if (isInsideEscape) {
			if (isInsideLinkEscape) {
				if (character === ANSI_ESCAPE_BELL) {
					isInsideEscape = false;
					isInsideLinkEscape = false;
				}
			} else if (character === ANSI_SGR_TERMINATOR) isInsideEscape = false;
		} else {
			visible += characterLength;
			if (visible === columns && !nextCharacter.done) {
				rows.push("");
				visible = 0;
			}
		}
		currentCharacter = nextCharacter;
		nextCharacter = characters.next();
		rawCharacterIndex += character.length;
	}
	lastRow = rows.at(-1);
	if (!visible && lastRow !== void 0 && lastRow.length && rows.length > 1) rows[rows.length - 2] += rows.pop();
};
const stringVisibleTrimSpacesRight = (string) => {
	const words = string.split(" ");
	let last = words.length;
	while (last) {
		if (fastStringWidth(words[last - 1])) break;
		last--;
	}
	if (last === words.length) return string;
	return words.slice(0, last).join(" ") + words.slice(last).join("");
};
const exec = (string, columns, options = {}) => {
	if (options.trim !== false && string.trim() === "") return "";
	let returnValue = "";
	let escapeCode;
	let escapeUrl;
	const words = string.split(" ");
	let rows = [""];
	let rowLength = 0;
	for (let index = 0; index < words.length; index++) {
		const word = words[index];
		if (options.trim !== false) {
			const row = rows.at(-1) ?? "";
			const trimmed = row.trimStart();
			if (row.length !== trimmed.length) {
				rows[rows.length - 1] = trimmed;
				rowLength = fastStringWidth(trimmed);
			}
		}
		if (index !== 0) {
			if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
				rows.push("");
				rowLength = 0;
			}
			if (rowLength || options.trim === false) {
				rows[rows.length - 1] += " ";
				rowLength++;
			}
		}
		const wordLength = fastStringWidth(word);
		if (options.hard && wordLength > columns) {
			const remainingColumns = columns - rowLength;
			const breaksStartingThisLine = 1 + Math.floor((wordLength - remainingColumns - 1) / columns);
			if (Math.floor((wordLength - 1) / columns) < breaksStartingThisLine) rows.push("");
			wrapWord(rows, word, columns);
			rowLength = fastStringWidth(rows.at(-1) ?? "");
			continue;
		}
		if (rowLength + wordLength > columns && rowLength && wordLength) {
			if (options.wordWrap === false && rowLength < columns) {
				wrapWord(rows, word, columns);
				rowLength = fastStringWidth(rows.at(-1) ?? "");
				continue;
			}
			rows.push("");
			rowLength = 0;
		}
		if (rowLength + wordLength > columns && options.wordWrap === false) {
			wrapWord(rows, word, columns);
			rowLength = fastStringWidth(rows.at(-1) ?? "");
			continue;
		}
		rows[rows.length - 1] += word;
		rowLength += wordLength;
	}
	if (options.trim !== false) rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
	const preString = rows.join("\n");
	let inSurrogate = false;
	for (let i = 0; i < preString.length; i++) {
		const character = preString[i];
		returnValue += character;
		if (!inSurrogate) inSurrogate = character >= "\ud800" && character <= "\udbff";
		else continue;
		if (character === ESC || character === CSI) {
			GROUP_REGEX.lastIndex = i + 1;
			const groups = GROUP_REGEX.exec(preString)?.groups;
			if (groups?.code !== void 0) {
				const code = Number.parseFloat(groups.code);
				escapeCode = code === END_CODE ? void 0 : code;
			} else if (groups?.uri !== void 0) escapeUrl = groups.uri.length === 0 ? void 0 : groups.uri;
		}
		if (preString[i + 1] === "\n") {
			if (escapeUrl) returnValue += wrapAnsiHyperlink("");
			const closingCode = escapeCode ? getClosingCode(escapeCode) : void 0;
			if (escapeCode && closingCode) returnValue += wrapAnsiCode(closingCode);
		} else if (character === "\n") {
			if (escapeCode && getClosingCode(escapeCode)) returnValue += wrapAnsiCode(escapeCode);
			if (escapeUrl) returnValue += wrapAnsiHyperlink(escapeUrl);
		}
	}
	return returnValue;
};
const CRLF_OR_LF = /\r?\n/;
function wrapAnsi(string, columns, options) {
	return String(string).normalize().split(CRLF_OR_LF).map((line) => exec(line, columns, options)).join("\n");
}
//#endregion
//#region node_modules/.pnpm/@clack+core@1.2.0/node_modules/@clack/core/dist/index.mjs
var import_src = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	const ESC = "\x1B";
	const CSI = `${ESC}[`;
	const beep = "\x07";
	const cursor = {
		to(x, y) {
			if (!y) return `${CSI}${x + 1}G`;
			return `${CSI}${y + 1};${x + 1}H`;
		},
		move(x, y) {
			let ret = "";
			if (x < 0) ret += `${CSI}${-x}D`;
			else if (x > 0) ret += `${CSI}${x}C`;
			if (y < 0) ret += `${CSI}${-y}A`;
			else if (y > 0) ret += `${CSI}${y}B`;
			return ret;
		},
		up: (count = 1) => `${CSI}${count}A`,
		down: (count = 1) => `${CSI}${count}B`,
		forward: (count = 1) => `${CSI}${count}C`,
		backward: (count = 1) => `${CSI}${count}D`,
		nextLine: (count = 1) => `${CSI}E`.repeat(count),
		prevLine: (count = 1) => `${CSI}F`.repeat(count),
		left: `${CSI}G`,
		hide: `${CSI}?25l`,
		show: `${CSI}?25h`,
		save: `${ESC}7`,
		restore: `${ESC}8`
	};
	module.exports = {
		cursor,
		scroll: {
			up: (count = 1) => `${CSI}S`.repeat(count),
			down: (count = 1) => `${CSI}T`.repeat(count)
		},
		erase: {
			screen: `${CSI}2J`,
			up: (count = 1) => `${CSI}1J`.repeat(count),
			down: (count = 1) => `${CSI}J`.repeat(count),
			line: `${CSI}2K`,
			lineEnd: `${CSI}K`,
			lineStart: `${CSI}1K`,
			lines(count) {
				let clear = "";
				for (let i = 0; i < count; i++) clear += this.line + (i < count - 1 ? cursor.up() : "");
				if (count) clear += cursor.left;
				return clear;
			}
		},
		beep
	};
})))();
function d$1(r, t, e) {
	if (!e.some((o) => !o.disabled)) return r;
	const s = r + t, i = Math.max(e.length - 1, 0), n = s < 0 ? i : s > i ? 0 : s;
	return e[n].disabled ? d$1(n, t < 0 ? -1 : 1, e) : n;
}
const u = {
	actions: new Set([
		"up",
		"down",
		"left",
		"right",
		"space",
		"enter",
		"cancel"
	]),
	aliases: new Map([
		["k", "up"],
		["j", "down"],
		["h", "left"],
		["l", "right"],
		["", "cancel"],
		["escape", "cancel"]
	]),
	messages: {
		cancel: "Canceled",
		error: "Something went wrong"
	},
	withGuide: !0,
	date: {
		monthNames: [...[
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		]],
		messages: {
			required: "Please enter a valid date",
			invalidMonth: "There are only 12 months in a year",
			invalidDay: (r, t) => `There are only ${r} days in ${t}`,
			afterMin: (r) => `Date must be on or after ${r.toISOString().slice(0, 10)}`,
			beforeMax: (r) => `Date must be on or before ${r.toISOString().slice(0, 10)}`
		}
	}
};
function V$1(r, t) {
	if (typeof r == "string") return u.aliases.get(r) === t;
	for (const e of r) if (e !== void 0 && V$1(e, t)) return !0;
	return !1;
}
function j(r, t) {
	if (r === t) return;
	const e = r.split(`
`), s = t.split(`
`), i = Math.max(e.length, s.length), n = [];
	for (let o = 0; o < i; o++) e[o] !== s[o] && n.push(o);
	return {
		lines: n,
		numLinesBefore: e.length,
		numLinesAfter: s.length,
		numLines: i
	};
}
globalThis.process.platform.startsWith("win");
const C = Symbol("clack:cancel");
function q(r) {
	return r === C;
}
function w$1(r, t) {
	const e = r;
	e.isTTY && e.setRawMode(t);
}
const O$1 = (r) => "columns" in r && typeof r.columns == "number" ? r.columns : 80, A = (r) => "rows" in r && typeof r.rows == "number" ? r.rows : 20;
function R(r, t, e, s = e) {
	return wrapAnsi(t, O$1(r ?? stdout) - e.length, {
		hard: !0,
		trim: !1
	}).split(`
`).map((n, o) => `${o === 0 ? s : e}${n}`).join(`
`);
}
let p = class {
	input;
	output;
	_abortSignal;
	rl;
	opts;
	_render;
	_track = !1;
	_prevFrame = "";
	_subscribers = /* @__PURE__ */ new Map();
	_cursor = 0;
	state = "initial";
	error = "";
	value;
	userInput = "";
	constructor(t, e = !0) {
		const { input: s = stdin, output: i = stdout, render: n, signal: o, ...a } = t;
		this.opts = a, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = n.bind(this), this._track = e, this._abortSignal = o, this.input = s, this.output = i;
	}
	unsubscribe() {
		this._subscribers.clear();
	}
	setSubscriber(t, e) {
		const s = this._subscribers.get(t) ?? [];
		s.push(e), this._subscribers.set(t, s);
	}
	on(t, e) {
		this.setSubscriber(t, { cb: e });
	}
	once(t, e) {
		this.setSubscriber(t, {
			cb: e,
			once: !0
		});
	}
	emit(t, ...e) {
		const s = this._subscribers.get(t) ?? [], i = [];
		for (const n of s) n.cb(...e), n.once && i.push(() => s.splice(s.indexOf(n), 1));
		for (const n of i) n();
	}
	prompt() {
		return new Promise((t) => {
			if (this._abortSignal) {
				if (this._abortSignal.aborted) return this.state = "cancel", this.close(), t(C);
				this._abortSignal.addEventListener("abort", () => {
					this.state = "cancel", this.close();
				}, { once: !0 });
			}
			this.rl = P$1.createInterface({
				input: this.input,
				tabSize: 2,
				prompt: "",
				escapeCodeTimeout: 50,
				terminal: !0
			}), this.rl.prompt(), this.opts.initialUserInput !== void 0 && this._setUserInput(this.opts.initialUserInput, !0), this.input.on("keypress", this.onKeypress), w$1(this.input, !0), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
				this.output.write(import_src.cursor.show), this.output.off("resize", this.render), w$1(this.input, !1), t(this.value);
			}), this.once("cancel", () => {
				this.output.write(import_src.cursor.show), this.output.off("resize", this.render), w$1(this.input, !1), t(C);
			});
		});
	}
	_isActionKey(t, e) {
		return t === "	";
	}
	_setValue(t) {
		this.value = t, this.emit("value", this.value);
	}
	_setUserInput(t, e) {
		this.userInput = t ?? "", this.emit("userInput", this.userInput), e && this._track && this.rl && (this.rl.write(this.userInput), this._cursor = this.rl.cursor);
	}
	_clearUserInput() {
		this.rl?.write(null, {
			ctrl: !0,
			name: "u"
		}), this._setUserInput("");
	}
	onKeypress(t, e) {
		if (this._track && e.name !== "return" && (e.name && this._isActionKey(t, e) && this.rl?.write(null, {
			ctrl: !0,
			name: "h"
		}), this._cursor = this.rl?.cursor ?? 0, this._setUserInput(this.rl?.line)), this.state === "error" && (this.state = "active"), e?.name && (!this._track && u.aliases.has(e.name) && this.emit("cursor", u.aliases.get(e.name)), u.actions.has(e.name) && this.emit("cursor", e.name)), t && (t.toLowerCase() === "y" || t.toLowerCase() === "n") && this.emit("confirm", t.toLowerCase() === "y"), this.emit("key", t?.toLowerCase(), e), e?.name === "return") {
			if (this.opts.validate) {
				const s = this.opts.validate(this.value);
				s && (this.error = s instanceof Error ? s.message : s, this.state = "error", this.rl?.write(this.userInput));
			}
			this.state !== "error" && (this.state = "submit");
		}
		V$1([
			t,
			e?.name,
			e?.sequence
		], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
	}
	close() {
		this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), w$1(this.input, !1), this.rl?.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
	}
	restoreCursor() {
		const t = wrapAnsi(this._prevFrame, process.stdout.columns, {
			hard: !0,
			trim: !1
		}).split(`
`).length - 1;
		this.output.write(import_src.cursor.move(-999, t * -1));
	}
	render() {
		const t = wrapAnsi(this._render(this) ?? "", process.stdout.columns, {
			hard: !0,
			trim: !1
		});
		if (t !== this._prevFrame) {
			if (this.state === "initial") this.output.write(import_src.cursor.hide);
			else {
				const e = j(this._prevFrame, t), s = A(this.output);
				if (this.restoreCursor(), e) {
					const i = Math.max(0, e.numLinesAfter - s), n = Math.max(0, e.numLinesBefore - s);
					let o = e.lines.find((a) => a >= i);
					if (o === void 0) {
						this._prevFrame = t;
						return;
					}
					if (e.lines.length === 1) {
						this.output.write(import_src.cursor.move(0, o - n)), this.output.write(import_src.erase.lines(1));
						const a = t.split(`
`);
						this.output.write(a[o]), this._prevFrame = t, this.output.write(import_src.cursor.move(0, a.length - o - 1));
						return;
					} else if (e.lines.length > 1) {
						if (i < n) o = i;
						else {
							const h = o - n;
							h > 0 && this.output.write(import_src.cursor.move(0, h));
						}
						this.output.write(import_src.erase.down());
						const a = t.split(`
`).slice(o);
						this.output.write(a.join(`
`)), this._prevFrame = t;
						return;
					}
				}
				this.output.write(import_src.erase.down());
			}
			this.output.write(t), this.state === "initial" && (this.state = "active"), this._prevFrame = t;
		}
	}
};
var Q$1 = class extends p {
	get cursor() {
		return this.value ? 0 : 1;
	}
	get _value() {
		return this.cursor === 0;
	}
	constructor(t) {
		super(t, !1), this.value = !!t.initialValue, this.on("userInput", () => {
			this.value = this._value;
		}), this.on("confirm", (e) => {
			this.output.write(import_src.cursor.move(0, -1)), this.value = e, this.state = "submit", this.close();
		}), this.on("cursor", () => {
			this.value = !this.value;
		});
	}
};
let it$1 = class extends p {
	options;
	cursor = 0;
	get _value() {
		return this.options[this.cursor].value;
	}
	get _enabledOptions() {
		return this.options.filter((t) => t.disabled !== !0);
	}
	toggleAll() {
		const t = this._enabledOptions, e = this.value !== void 0 && this.value.length === t.length;
		this.value = e ? [] : t.map((s) => s.value);
	}
	toggleInvert() {
		const t = this.value;
		if (!t) return;
		const e = this._enabledOptions.filter((s) => !t.includes(s.value));
		this.value = e.map((s) => s.value);
	}
	toggleValue() {
		this.value === void 0 && (this.value = []);
		const t = this.value.includes(this._value);
		this.value = t ? this.value.filter((e) => e !== this._value) : [...this.value, this._value];
	}
	constructor(t) {
		super(t, !1), this.options = t.options, this.value = [...t.initialValues ?? []];
		const e = Math.max(this.options.findIndex(({ value: s }) => s === t.cursorAt), 0);
		this.cursor = this.options[e].disabled ? d$1(e, 1, this.options) : e, this.on("key", (s) => {
			s === "a" && this.toggleAll(), s === "i" && this.toggleInvert();
		}), this.on("cursor", (s) => {
			switch (s) {
				case "left":
				case "up":
					this.cursor = d$1(this.cursor, -1, this.options);
					break;
				case "down":
				case "right":
					this.cursor = d$1(this.cursor, 1, this.options);
					break;
				case "space":
					this.toggleValue();
					break;
			}
		});
	}
};
var nt$1 = class extends p {
	options;
	cursor = 0;
	get _selectedValue() {
		return this.options[this.cursor];
	}
	changeValue() {
		this.value = this._selectedValue.value;
	}
	constructor(t) {
		super(t, !1), this.options = t.options;
		const e = this.options.findIndex(({ value: i }) => i === t.initialValue), s = e === -1 ? 0 : e;
		this.cursor = this.options[s].disabled ? d$1(s, 1, this.options) : s, this.changeValue(), this.on("cursor", (i) => {
			switch (i) {
				case "left":
				case "up":
					this.cursor = d$1(this.cursor, -1, this.options);
					break;
				case "down":
				case "right":
					this.cursor = d$1(this.cursor, 1, this.options);
					break;
			}
			this.changeValue();
		});
	}
};
var at$1 = class extends p {
	get userInputWithCursor() {
		if (this.state === "submit") return this.userInput;
		const t = this.userInput;
		if (this.cursor >= t.length) return `${this.userInput}\u2588`;
		const e = t.slice(0, this.cursor), [s, ...i] = t.slice(this.cursor);
		return `${e}${styleText("inverse", s)}${i.join("")}`;
	}
	get cursor() {
		return this._cursor;
	}
	constructor(t) {
		super({
			...t,
			initialUserInput: t.initialUserInput ?? t.initialValue
		}), this.on("userInput", (e) => {
			this._setValue(e);
		}), this.on("finalize", () => {
			this.value || (this.value = t.defaultValue), this.value === void 0 && (this.value = "");
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@clack+prompts@1.2.0/node_modules/@clack/prompts/dist/index.mjs
function Ze() {
	return P.platform !== "win32" ? P.env.TERM !== "linux" : !!P.env.CI || !!P.env.WT_SESSION || !!P.env.TERMINUS_SUBLIME || P.env.ConEmuTask === "{cmd::Cmder}" || P.env.TERM_PROGRAM === "Terminus-Sublime" || P.env.TERM_PROGRAM === "vscode" || P.env.TERM === "xterm-256color" || P.env.TERM === "alacritty" || P.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
const ee = Ze(), w = (e, i) => ee ? e : i, _e = w("◆", "*"), oe = w("■", "x"), ue = w("▲", "x"), F = w("◇", "o"), le = w("┌", "T"), d = w("│", "|"), E = w("└", "—");
w("┐", "T");
w("┘", "—");
const z = w("●", ">"), H = w("○", " "), te = w("◻", "[•]"), U = w("◼", "[+]"), J = w("◻", "[ ]");
w("▪", "•");
w("─", "-");
w("╮", "+");
w("├", "+");
w("╯", "+");
w("╰", "+");
w("╭", "+");
const he = w("●", "•"), pe = w("◆", "*"), me = w("▲", "!"), ge = w("■", "x"), V = (e) => {
	switch (e) {
		case "initial":
		case "active": return styleText("cyan", _e);
		case "cancel": return styleText("red", oe);
		case "error": return styleText("yellow", ue);
		case "submit": return styleText("green", F);
	}
}, ye = (e) => {
	switch (e) {
		case "initial":
		case "active": return styleText("cyan", d);
		case "cancel": return styleText("red", d);
		case "error": return styleText("yellow", d);
		case "submit": return styleText("green", d);
	}
}, et = (e, i, s, r, u) => {
	let n = i, o = 0;
	for (let c = s; c < r; c++) {
		const a = e[c];
		if (n = n - a.length, o++, n <= u) break;
	}
	return {
		lineCount: n,
		removals: o
	};
}, Y = ({ cursor: e, options: i, style: s, output: r = process.stdout, maxItems: u = Number.POSITIVE_INFINITY, columnPadding: n = 0, rowPadding: o = 4 }) => {
	const c = O$1(r) - n, a = A(r), l = styleText("dim", "..."), $ = Math.max(a - o, 0), y = Math.max(Math.min(u, $), 5);
	let p = 0;
	e >= y - 3 && (p = Math.max(Math.min(e - y + 3, i.length - y), 0));
	let m = y < i.length && p > 0, g = y < i.length && p + y < i.length;
	const S = Math.min(p + y, i.length), h = [];
	let f = 0;
	m && f++, g && f++;
	const v = p + (m ? 1 : 0), T = S - (g ? 1 : 0);
	for (let b = v; b < T; b++) {
		const x = wrapAnsi(s(i[b], b === e), c, {
			hard: !0,
			trim: !1
		}).split(`
`);
		h.push(x), f += x.length;
	}
	if (f > $) {
		let b = 0, x = 0, G = f;
		const M = e - v, R = (j, D) => et(h, G, j, D, $);
		m ? ({lineCount: G, removals: b} = R(0, M), G > $ && ({lineCount: G, removals: x} = R(M + 1, h.length))) : ({lineCount: G, removals: x} = R(M + 1, h.length), G > $ && ({lineCount: G, removals: b} = R(0, M))), b > 0 && (m = !0, h.splice(0, b)), x > 0 && (g = !0, h.splice(h.length - x, x));
	}
	const C = [];
	m && C.push(l);
	for (const b of h) for (const x of b) C.push(x);
	return g && C.push(l), C;
};
const ot = (e) => {
	const i = e.active ?? "Yes", s = e.inactive ?? "No";
	return new Q$1({
		active: i,
		inactive: s,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValue: e.initialValue ?? !0,
		render() {
			const r = e.withGuide ?? u.withGuide, u$4 = `${V(this.state)}  `, n = r ? `${styleText("gray", d)}  ` : "", o = R(e.output, e.message, n, u$4), c = `${r ? `${styleText("gray", d)}
` : ""}${o}
`, a = this.value ? i : s;
			switch (this.state) {
				case "submit": return `${c}${r ? `${styleText("gray", d)}  ` : ""}${styleText("dim", a)}`;
				case "cancel": return `${c}${r ? `${styleText("gray", d)}  ` : ""}${styleText(["strikethrough", "dim"], a)}${r ? `
${styleText("gray", d)}` : ""}`;
				default: {
					const l = r ? `${styleText("cyan", d)}  ` : "", $ = r ? styleText("cyan", E) : "";
					return `${c}${l}${this.value ? `${styleText("green", z)} ${i}` : `${styleText("dim", H)} ${styleText("dim", i)}`}${e.vertical ? r ? `
${styleText("cyan", d)}  ` : `
` : ` ${styleText("dim", "/")} `}${this.value ? `${styleText("dim", H)} ${styleText("dim", s)}` : `${styleText("green", z)} ${s}`}
${$}
`;
				}
			}
		}
	}).prompt();
}, O = {
	message: (e = [], { symbol: i = styleText("gray", d), secondarySymbol: s = styleText("gray", d), output: r = process.stdout, spacing: u$7 = 1, withGuide: n } = {}) => {
		const o = [], c = n ?? u.withGuide, a = c ? s : "", l = c ? `${i}  ` : "", $ = c ? `${s}  ` : "";
		for (let p = 0; p < u$7; p++) o.push(a);
		const y = Array.isArray(e) ? e : e.split(`
`);
		if (y.length > 0) {
			const [p, ...m] = y;
			p.length > 0 ? o.push(`${l}${p}`) : o.push(c ? i : "");
			for (const g of m) g.length > 0 ? o.push(`${$}${g}`) : o.push(c ? s : "");
		}
		r.write(`${o.join(`
`)}
`);
	},
	info: (e, i) => {
		O.message(e, {
			...i,
			symbol: styleText("blue", he)
		});
	},
	success: (e, i) => {
		O.message(e, {
			...i,
			symbol: styleText("green", pe)
		});
	},
	step: (e, i) => {
		O.message(e, {
			...i,
			symbol: styleText("green", F)
		});
	},
	warn: (e, i) => {
		O.message(e, {
			...i,
			symbol: styleText("yellow", me)
		});
	},
	warning: (e, i) => {
		O.warn(e, i);
	},
	error: (e, i) => {
		O.message(e, {
			...i,
			symbol: styleText("red", ge)
		});
	}
}, pt = (e = "", i) => {
	const s = i?.output ?? process.stdout, r = i?.withGuide ?? u.withGuide ? `${styleText("gray", E)}  ` : "";
	s.write(`${r}${styleText("red", e)}

`);
}, mt = (e = "", i) => {
	const s = i?.output ?? process.stdout, r = i?.withGuide ?? u.withGuide ? `${styleText("gray", le)}  ` : "";
	s.write(`${r}${e}
`);
}, gt = (e = "", i) => {
	const s = i?.output ?? process.stdout, r = i?.withGuide ?? u.withGuide ? `${styleText("gray", d)}
${styleText("gray", E)}  ` : "";
	s.write(`${r}${e}

`);
}, Q = (e, i) => e.split(`
`).map((s) => i(s)).join(`
`), yt = (e) => {
	const i = (r, u) => {
		const n = r.label ?? String(r.value);
		return u === "disabled" ? `${styleText("gray", J)} ${Q(n, (o) => styleText(["strikethrough", "gray"], o))}${r.hint ? ` ${styleText("dim", `(${r.hint ?? "disabled"})`)}` : ""}` : u === "active" ? `${styleText("cyan", te)} ${n}${r.hint ? ` ${styleText("dim", `(${r.hint})`)}` : ""}` : u === "selected" ? `${styleText("green", U)} ${Q(n, (o) => styleText("dim", o))}${r.hint ? ` ${styleText("dim", `(${r.hint})`)}` : ""}` : u === "cancelled" ? `${Q(n, (o) => styleText(["strikethrough", "dim"], o))}` : u === "active-selected" ? `${styleText("green", U)} ${n}${r.hint ? ` ${styleText("dim", `(${r.hint})`)}` : ""}` : u === "submitted" ? `${Q(n, (o) => styleText("dim", o))}` : `${styleText("dim", J)} ${Q(n, (o) => styleText("dim", o))}`;
	}, s = e.required ?? !0;
	return new it$1({
		options: e.options,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValues: e.initialValues,
		required: s,
		cursorAt: e.cursorAt,
		validate(r) {
			if (s && (r === void 0 || r.length === 0)) return `Please select at least one option.
${styleText("reset", styleText("dim", `Press ${styleText([
				"gray",
				"bgWhite",
				"inverse"
			], " space ")} to select, ${styleText("gray", styleText("bgWhite", styleText("inverse", " enter ")))} to submit`))}`;
		},
		render() {
			const r = e.withGuide ?? u.withGuide, u$8 = R(e.output, e.message, r ? `${ye(this.state)}  ` : "", `${V(this.state)}  `), n = `${r ? `${styleText("gray", d)}
` : ""}${u$8}
`, o = this.value ?? [], c = (a, l) => {
				if (a.disabled) return i(a, "disabled");
				const $ = o.includes(a.value);
				return l && $ ? i(a, "active-selected") : $ ? i(a, "selected") : i(a, l ? "active" : "inactive");
			};
			switch (this.state) {
				case "submit": {
					const a = this.options.filter(({ value: $ }) => o.includes($)).map(($) => i($, "submitted")).join(styleText("dim", ", ")) || styleText("dim", "none");
					return `${n}${R(e.output, a, r ? `${styleText("gray", d)}  ` : "")}`;
				}
				case "cancel": {
					const a = this.options.filter(({ value: $ }) => o.includes($)).map(($) => i($, "cancelled")).join(styleText("dim", ", "));
					if (a.trim() === "") return `${n}${styleText("gray", d)}`;
					return `${n}${R(e.output, a, r ? `${styleText("gray", d)}  ` : "")}${r ? `
${styleText("gray", d)}` : ""}`;
				}
				case "error": {
					const a = r ? `${styleText("yellow", d)}  ` : "", l = this.error.split(`
`).map((p, m) => m === 0 ? `${r ? `${styleText("yellow", E)}  ` : ""}${styleText("yellow", p)}` : `   ${p}`).join(`
`), $ = n.split(`
`).length, y = l.split(`
`).length + 1;
					return `${n}${a}${Y({
						output: e.output,
						options: this.options,
						cursor: this.cursor,
						maxItems: e.maxItems,
						columnPadding: a.length,
						rowPadding: $ + y,
						style: c
					}).join(`
${a}`)}
${l}
`;
				}
				default: {
					const a = r ? `${styleText("cyan", d)}  ` : "", l = n.split(`
`).length, $ = r ? 2 : 1;
					return `${n}${a}${Y({
						output: e.output,
						options: this.options,
						cursor: this.cursor,
						maxItems: e.maxItems,
						columnPadding: a.length,
						rowPadding: l + $,
						style: c
					}).join(`
${a}`)}
${r ? styleText("cyan", E) : ""}
`;
				}
			}
		}
	}).prompt();
};
w("─", "-"), w("━", "="), w("█", "#");
const re = (e, i) => e.includes(`
`) ? e.split(`
`).map((s) => i(s)).join(`
`) : i(e), _t = (e) => {
	const i = (s, r) => {
		const u = s.label ?? String(s.value);
		switch (r) {
			case "disabled": return `${styleText("gray", H)} ${re(u, (n) => styleText("gray", n))}${s.hint ? ` ${styleText("dim", `(${s.hint ?? "disabled"})`)}` : ""}`;
			case "selected": return `${re(u, (n) => styleText("dim", n))}`;
			case "active": return `${styleText("green", z)} ${u}${s.hint ? ` ${styleText("dim", `(${s.hint})`)}` : ""}`;
			case "cancelled": return `${re(u, (n) => styleText(["strikethrough", "dim"], n))}`;
			default: return `${styleText("dim", H)} ${re(u, (n) => styleText("dim", n))}`;
		}
	};
	return new nt$1({
		options: e.options,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValue: e.initialValue,
		render() {
			const s = e.withGuide ?? u.withGuide, r = `${V(this.state)}  `, u$12 = `${ye(this.state)}  `, n = R(e.output, e.message, u$12, r), o = `${s ? `${styleText("gray", d)}
` : ""}${n}
`;
			switch (this.state) {
				case "submit": {
					const c = s ? `${styleText("gray", d)}  ` : "";
					return `${o}${R(e.output, i(this.options[this.cursor], "selected"), c)}`;
				}
				case "cancel": {
					const c = s ? `${styleText("gray", d)}  ` : "";
					return `${o}${R(e.output, i(this.options[this.cursor], "cancelled"), c)}${s ? `
${styleText("gray", d)}` : ""}`;
				}
				default: {
					const c = s ? `${styleText("cyan", d)}  ` : "", a = s ? styleText("cyan", E) : "", l = o.split(`
`).length, $ = s ? 2 : 1;
					return `${o}${c}${Y({
						output: e.output,
						cursor: this.cursor,
						options: this.options,
						maxItems: e.maxItems,
						columnPadding: c.length,
						rowPadding: l + $,
						style: (y, p) => i(y, y.disabled ? "disabled" : p ? "active" : "inactive")
					}).join(`
${c}`)}
${a}
`;
				}
			}
		}
	}).prompt();
}, je = `${styleText("gray", d)}  `, K = {
	message: async (e, { symbol: i = styleText("gray", d) } = {}) => {
		process.stdout.write(`${styleText("gray", d)}
${i}  `);
		let s = 3;
		for await (let r of e) {
			r = r.replace(/\n/g, `
${je}`), r.includes(`
`) && (s = 3 + stripVTControlCharacters(r.slice(r.lastIndexOf(`
`))).length);
			const u = stripVTControlCharacters(r).length;
			s + u < process.stdout.columns ? (s += u, process.stdout.write(r)) : (process.stdout.write(`
${je}${r.trimStart()}`), s = 3 + stripVTControlCharacters(r.trimStart()).length);
		}
		process.stdout.write(`
`);
	},
	info: (e) => K.message(e, { symbol: styleText("blue", he) }),
	success: (e) => K.message(e, { symbol: styleText("green", pe) }),
	step: (e) => K.message(e, { symbol: styleText("green", F) }),
	warn: (e) => K.message(e, { symbol: styleText("yellow", me) }),
	warning: (e) => K.warn(e),
	error: (e) => K.message(e, { symbol: styleText("red", ge) })
}, Ot = (e) => new at$1({
	validate: e.validate,
	placeholder: e.placeholder,
	defaultValue: e.defaultValue,
	initialValue: e.initialValue,
	output: e.output,
	signal: e.signal,
	input: e.input,
	render() {
		const i = e?.withGuide ?? u.withGuide, s = `${`${i ? `${styleText("gray", d)}
` : ""}${V(this.state)}  `}${e.message}
`, r = e.placeholder ? styleText("inverse", e.placeholder[0]) + styleText("dim", e.placeholder.slice(1)) : styleText(["inverse", "hidden"], "_"), u$13 = this.userInput ? this.userInputWithCursor : r, n = this.value ?? "";
		switch (this.state) {
			case "error": {
				const o = this.error ? `  ${styleText("yellow", this.error)}` : "", c = i ? `${styleText("yellow", d)}  ` : "", a = i ? styleText("yellow", E) : "";
				return `${s.trim()}
${c}${u$13}
${a}${o}
`;
			}
			case "submit": {
				const o = n ? `  ${styleText("dim", n)}` : "";
				return `${s}${i ? styleText("gray", d) : ""}${o}`;
			}
			case "cancel": {
				const o = n ? `  ${styleText(["strikethrough", "dim"], n)}` : "", c = i ? styleText("gray", d) : "";
				return `${s}${c}${o}${n.trim() ? `
${c}` : ""}`;
			}
			default: return `${s}${i ? `${styleText("cyan", d)}  ` : ""}${u$13}
${i ? styleText("cyan", E) : ""}
`;
		}
	}
}).prompt();
//#endregion
//#region node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js
var require_picocolors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	let p = process || {}, argv = p.argv || [], env = p.env || {};
	let isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
	let formatter = (open, close, replace = open) => (input) => {
		let string = "" + input, index = string.indexOf(close, open.length);
		return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
	};
	let replaceClose = (string, close, replace, index) => {
		let result = "", cursor = 0;
		do {
			result += string.substring(cursor, index) + replace;
			cursor = index + close.length;
			index = string.indexOf(close, cursor);
		} while (~index);
		return result + string.substring(cursor);
	};
	let createColors = (enabled = isColorSupported) => {
		let f = enabled ? formatter : () => String;
		return {
			isColorSupported: enabled,
			reset: f("\x1B[0m", "\x1B[0m"),
			bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
			dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
			italic: f("\x1B[3m", "\x1B[23m"),
			underline: f("\x1B[4m", "\x1B[24m"),
			inverse: f("\x1B[7m", "\x1B[27m"),
			hidden: f("\x1B[8m", "\x1B[28m"),
			strikethrough: f("\x1B[9m", "\x1B[29m"),
			black: f("\x1B[30m", "\x1B[39m"),
			red: f("\x1B[31m", "\x1B[39m"),
			green: f("\x1B[32m", "\x1B[39m"),
			yellow: f("\x1B[33m", "\x1B[39m"),
			blue: f("\x1B[34m", "\x1B[39m"),
			magenta: f("\x1B[35m", "\x1B[39m"),
			cyan: f("\x1B[36m", "\x1B[39m"),
			white: f("\x1B[37m", "\x1B[39m"),
			gray: f("\x1B[90m", "\x1B[39m"),
			bgBlack: f("\x1B[40m", "\x1B[49m"),
			bgRed: f("\x1B[41m", "\x1B[49m"),
			bgGreen: f("\x1B[42m", "\x1B[49m"),
			bgYellow: f("\x1B[43m", "\x1B[49m"),
			bgBlue: f("\x1B[44m", "\x1B[49m"),
			bgMagenta: f("\x1B[45m", "\x1B[49m"),
			bgCyan: f("\x1B[46m", "\x1B[49m"),
			bgWhite: f("\x1B[47m", "\x1B[49m"),
			blackBright: f("\x1B[90m", "\x1B[39m"),
			redBright: f("\x1B[91m", "\x1B[39m"),
			greenBright: f("\x1B[92m", "\x1B[39m"),
			yellowBright: f("\x1B[93m", "\x1B[39m"),
			blueBright: f("\x1B[94m", "\x1B[39m"),
			magentaBright: f("\x1B[95m", "\x1B[39m"),
			cyanBright: f("\x1B[96m", "\x1B[39m"),
			whiteBright: f("\x1B[97m", "\x1B[39m"),
			bgBlackBright: f("\x1B[100m", "\x1B[49m"),
			bgRedBright: f("\x1B[101m", "\x1B[49m"),
			bgGreenBright: f("\x1B[102m", "\x1B[49m"),
			bgYellowBright: f("\x1B[103m", "\x1B[49m"),
			bgBlueBright: f("\x1B[104m", "\x1B[49m"),
			bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
			bgCyanBright: f("\x1B[106m", "\x1B[49m"),
			bgWhiteBright: f("\x1B[107m", "\x1B[49m")
		};
	};
	module.exports = createColors();
	module.exports.createColors = createColors;
}));
//#endregion
//#region node_modules/.pnpm/ejs@3.1.10/node_modules/ejs/lib/utils.js
/**
* Private utility functions
* @module utils
* @private
*/
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	var regExpChars = /[|\\{}()[\]^$+*?.]/g;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var hasOwn = function(obj, key) {
		return hasOwnProperty.apply(obj, [key]);
	};
	/**
	* Escape characters reserved in regular expressions.
	*
	* If `string` is `undefined` or `null`, the empty string is returned.
	*
	* @param {String} string Input string
	* @return {String} Escaped string
	* @static
	* @private
	*/
	exports.escapeRegExpChars = function(string) {
		// istanbul ignore if
		if (!string) return "";
		return String(string).replace(regExpChars, "\\$&");
	};
	var _ENCODE_HTML_RULES = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&#34;",
		"'": "&#39;"
	};
	var _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
		return _ENCODE_HTML_RULES[c] || c;
	}
	/**
	* Stringified version of constants used by {@link module:utils.escapeXML}.
	*
	* It is used in the process of generating {@link ClientFunction}s.
	*
	* @readonly
	* @type {String}
	*/
	var escapeFuncStr = "var _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n";
	/**
	* Escape characters reserved in XML.
	*
	* If `markup` is `undefined` or `null`, the empty string is returned.
	*
	* @implements {EscapeCallback}
	* @param {String} markup Input string
	* @return {String} Escaped string
	* @static
	* @private
	*/
	exports.escapeXML = function(markup) {
		return markup == void 0 ? "" : String(markup).replace(_MATCH_HTML, encode_char);
	};
	function escapeXMLToString() {
		return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
	}
	try {
		if (typeof Object.defineProperty === "function") Object.defineProperty(exports.escapeXML, "toString", { value: escapeXMLToString });
		else exports.escapeXML.toString = escapeXMLToString;
	} catch (err) {
		console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
	}
	/**
	* Naive copy of properties from one object to another.
	* Does not recurse into non-scalar properties
	* Does not check to see if the property has a value before copying
	*
	* @param  {Object} to   Destination object
	* @param  {Object} from Source object
	* @return {Object}      Destination object
	* @static
	* @private
	*/
	exports.shallowCopy = function(to, from) {
		from = from || {};
		if (to !== null && to !== void 0) for (var p in from) {
			if (!hasOwn(from, p)) continue;
			if (p === "__proto__" || p === "constructor") continue;
			to[p] = from[p];
		}
		return to;
	};
	/**
	* Naive copy of a list of key names, from one object to another.
	* Only copies property if it is actually defined
	* Does not recurse into non-scalar properties
	*
	* @param  {Object} to   Destination object
	* @param  {Object} from Source object
	* @param  {Array} list List of properties to copy
	* @return {Object}      Destination object
	* @static
	* @private
	*/
	exports.shallowCopyFromList = function(to, from, list) {
		list = list || [];
		from = from || {};
		if (to !== null && to !== void 0) for (var i = 0; i < list.length; i++) {
			var p = list[i];
			if (typeof from[p] != "undefined") {
				if (!hasOwn(from, p)) continue;
				if (p === "__proto__" || p === "constructor") continue;
				to[p] = from[p];
			}
		}
		return to;
	};
	/**
	* Simple in-process cache implementation. Does not implement limits of any
	* sort.
	*
	* @implements {Cache}
	* @static
	* @private
	*/
	exports.cache = {
		_data: {},
		set: function(key, val) {
			this._data[key] = val;
		},
		get: function(key) {
			return this._data[key];
		},
		remove: function(key) {
			delete this._data[key];
		},
		reset: function() {
			this._data = {};
		}
	};
	/**
	* Transforms hyphen case variable into camel case.
	*
	* @param {String} string Hyphen case string
	* @return {String} Camel case string
	* @static
	* @private
	*/
	exports.hyphenToCamel = function(str) {
		return str.replace(/-[a-z]/g, function(match) {
			return match[1].toUpperCase();
		});
	};
	/**
	* Returns a null-prototype object in runtimes that support it
	*
	* @return {Object} Object, prototype will be set to null where possible
	* @static
	* @private
	*/
	exports.createNullProtoObjWherePossible = (function() {
		if (typeof Object.create == "function") return function() {
			return Object.create(null);
		};
		if (!({ __proto__: null } instanceof Object)) return function() {
			return { __proto__: null };
		};
		return function() {
			return {};
		};
	})();
	exports.hasOwnOnlyObject = function(obj) {
		var o = exports.createNullProtoObjWherePossible();
		for (var p in obj) if (hasOwn(obj, p)) o[p] = obj[p];
		return o;
	};
}));
//#endregion
//#region node_modules/.pnpm/ejs@3.1.10/node_modules/ejs/package.json
var require_package = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"name": "ejs",
		"description": "Embedded JavaScript templates",
		"keywords": [
			"template",
			"engine",
			"ejs"
		],
		"version": "3.1.10",
		"author": "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
		"license": "Apache-2.0",
		"bin": { "ejs": "./bin/cli.js" },
		"main": "./lib/ejs.js",
		"jsdelivr": "ejs.min.js",
		"unpkg": "ejs.min.js",
		"repository": {
			"type": "git",
			"url": "git://github.com/mde/ejs.git"
		},
		"bugs": "https://github.com/mde/ejs/issues",
		"homepage": "https://github.com/mde/ejs",
		"dependencies": { "jake": "^10.8.5" },
		"devDependencies": {
			"browserify": "^16.5.1",
			"eslint": "^6.8.0",
			"git-directory-deploy": "^1.5.1",
			"jsdoc": "^4.0.2",
			"lru-cache": "^4.0.1",
			"mocha": "^10.2.0",
			"uglify-js": "^3.3.16"
		},
		"engines": { "node": ">=0.10.0" },
		"scripts": { "test": "npx jake test" }
	};
}));
//#endregion
//#region node_modules/.pnpm/ejs@3.1.10/node_modules/ejs/lib/ejs.js
var require_ejs = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* @file Embedded JavaScript templating engine. {@link http://ejs.co}
	* @author Matthew Eernisse <mde@fleegix.org>
	* @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
	* @project EJS
	* @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
	*/
	/**
	* EJS internal functions.
	*
	* Technically this "module" lies in the same file as {@link module:ejs}, for
	* the sake of organization all the private functions re grouped into this
	* module.
	*
	* @module ejs-internal
	* @private
	*/
	/**
	* Embedded JavaScript templating engine.
	*
	* @module ejs
	* @public
	*/
	var fs$1 = __require("fs");
	var path$2 = __require("path");
	var utils = require_utils();
	var scopeOptionWarned = false;
	/** @type {string} */
	var _VERSION_STRING = require_package().version;
	var _DEFAULT_OPEN_DELIMITER = "<";
	var _DEFAULT_CLOSE_DELIMITER = ">";
	var _DEFAULT_DELIMITER = "%";
	var _DEFAULT_LOCALS_NAME = "locals";
	var _NAME = "ejs";
	var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
	var _OPTS_PASSABLE_WITH_DATA = [
		"delimiter",
		"scope",
		"context",
		"debug",
		"compileDebug",
		"client",
		"_with",
		"rmWhitespace",
		"strict",
		"filename",
		"async"
	];
	var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");
	var _BOM = /^\uFEFF/;
	var _JS_IDENTIFIER = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
	/**
	* EJS template function cache. This can be a LRU object from lru-cache NPM
	* module. By default, it is {@link module:utils.cache}, a simple in-process
	* cache that grows continuously.
	*
	* @type {Cache}
	*/
	exports.cache = utils.cache;
	/**
	* Custom file loader. Useful for template preprocessing or restricting access
	* to a certain part of the filesystem.
	*
	* @type {fileLoader}
	*/
	exports.fileLoader = fs$1.readFileSync;
	/**
	* Name of the object containing the locals.
	*
	* This variable is overridden by {@link Options}`.localsName` if it is not
	* `undefined`.
	*
	* @type {String}
	* @public
	*/
	exports.localsName = _DEFAULT_LOCALS_NAME;
	/**
	* Promise implementation -- defaults to the native implementation if available
	* This is mostly just for testability
	*
	* @type {PromiseConstructorLike}
	* @public
	*/
	exports.promiseImpl = new Function("return this;")().Promise;
	/**
	* Get the path to the included file from the parent file path and the
	* specified path.
	*
	* @param {String}  name     specified path
	* @param {String}  filename parent file path
	* @param {Boolean} [isDir=false] whether the parent file path is a directory
	* @return {String}
	*/
	exports.resolveInclude = function(name, filename, isDir) {
		var dirname = path$2.dirname;
		var extname = path$2.extname;
		var resolve = path$2.resolve;
		var includePath = resolve(isDir ? filename : dirname(filename), name);
		if (!extname(name)) includePath += ".ejs";
		return includePath;
	};
	/**
	* Try to resolve file path on multiple directories
	*
	* @param  {String}        name  specified path
	* @param  {Array<String>} paths list of possible parent directory paths
	* @return {String}
	*/
	function resolvePaths(name, paths) {
		var filePath;
		if (paths.some(function(v) {
			filePath = exports.resolveInclude(name, v, true);
			return fs$1.existsSync(filePath);
		})) return filePath;
	}
	/**
	* Get the path to the included file by Options
	*
	* @param  {String}  path    specified path
	* @param  {Options} options compilation options
	* @return {String}
	*/
	function getIncludePath(path, options) {
		var includePath;
		var filePath;
		var views = options.views;
		var match = /^[A-Za-z]+:\\|^\//.exec(path);
		if (match && match.length) {
			path = path.replace(/^\/*/, "");
			if (Array.isArray(options.root)) includePath = resolvePaths(path, options.root);
			else includePath = exports.resolveInclude(path, options.root || "/", true);
		} else {
			if (options.filename) {
				filePath = exports.resolveInclude(path, options.filename);
				if (fs$1.existsSync(filePath)) includePath = filePath;
			}
			if (!includePath && Array.isArray(views)) includePath = resolvePaths(path, views);
			if (!includePath && typeof options.includer !== "function") throw new Error("Could not find the include file \"" + options.escapeFunction(path) + "\"");
		}
		return includePath;
	}
	/**
	* Get the template from a string or a file, either compiled on-the-fly or
	* read from cache (if enabled), and cache the template if needed.
	*
	* If `template` is not set, the file specified in `options.filename` will be
	* read.
	*
	* If `options.cache` is true, this function reads the file from
	* `options.filename` so it must be set prior to calling this function.
	*
	* @memberof module:ejs-internal
	* @param {Options} options   compilation options
	* @param {String} [template] template source
	* @return {(TemplateFunction|ClientFunction)}
	* Depending on the value of `options.client`, either type might be returned.
	* @static
	*/
	function handleCache(options, template) {
		var func;
		var filename = options.filename;
		var hasTemplate = arguments.length > 1;
		if (options.cache) {
			if (!filename) throw new Error("cache option requires a filename");
			func = exports.cache.get(filename);
			if (func) return func;
			if (!hasTemplate) template = fileLoader(filename).toString().replace(_BOM, "");
		} else if (!hasTemplate) {
			// istanbul ignore if: should not happen at all
			if (!filename) throw new Error("Internal EJS error: no file name or template provided");
			template = fileLoader(filename).toString().replace(_BOM, "");
		}
		func = exports.compile(template, options);
		if (options.cache) exports.cache.set(filename, func);
		return func;
	}
	/**
	* Try calling handleCache with the given options and data and call the
	* callback with the result. If an error occurs, call the callback with
	* the error. Used by renderFile().
	*
	* @memberof module:ejs-internal
	* @param {Options} options    compilation options
	* @param {Object} data        template data
	* @param {RenderFileCallback} cb callback
	* @static
	*/
	function tryHandleCache(options, data, cb) {
		var result;
		if (!cb) if (typeof exports.promiseImpl == "function") return new exports.promiseImpl(function(resolve, reject) {
			try {
				result = handleCache(options)(data);
				resolve(result);
			} catch (err) {
				reject(err);
			}
		});
		else throw new Error("Please provide a callback function");
		else {
			try {
				result = handleCache(options)(data);
			} catch (err) {
				return cb(err);
			}
			cb(null, result);
		}
	}
	/**
	* fileLoader is independent
	*
	* @param {String} filePath ejs file path.
	* @return {String} The contents of the specified file.
	* @static
	*/
	function fileLoader(filePath) {
		return exports.fileLoader(filePath);
	}
	/**
	* Get the template function.
	*
	* If `options.cache` is `true`, then the template is cached.
	*
	* @memberof module:ejs-internal
	* @param {String}  path    path for the specified file
	* @param {Options} options compilation options
	* @return {(TemplateFunction|ClientFunction)}
	* Depending on the value of `options.client`, either type might be returned
	* @static
	*/
	function includeFile(path, options) {
		var opts = utils.shallowCopy(utils.createNullProtoObjWherePossible(), options);
		opts.filename = getIncludePath(path, opts);
		if (typeof options.includer === "function") {
			var includerResult = options.includer(path, opts.filename);
			if (includerResult) {
				if (includerResult.filename) opts.filename = includerResult.filename;
				if (includerResult.template) return handleCache(opts, includerResult.template);
			}
		}
		return handleCache(opts);
	}
	/**
	* Re-throw the given `err` in context to the `str` of ejs, `filename`, and
	* `lineno`.
	*
	* @implements {RethrowCallback}
	* @memberof module:ejs-internal
	* @param {Error}  err      Error object
	* @param {String} str      EJS source
	* @param {String} flnm     file name of the EJS file
	* @param {Number} lineno   line number of the error
	* @param {EscapeCallback} esc
	* @static
	*/
	function rethrow(err, str, flnm, lineno, esc) {
		var lines = str.split("\n");
		var start = Math.max(lineno - 3, 0);
		var end = Math.min(lines.length, lineno + 3);
		var filename = esc(flnm);
		var context = lines.slice(start, end).map(function(line, i) {
			var curr = i + start + 1;
			return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
		}).join("\n");
		err.path = filename;
		err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
		throw err;
	}
	function stripSemi(str) {
		return str.replace(/;(\s*$)/, "$1");
	}
	/**
	* Compile the given `str` of ejs into a template function.
	*
	* @param {String}  template EJS template
	*
	* @param {Options} [opts] compilation options
	*
	* @return {(TemplateFunction|ClientFunction)}
	* Depending on the value of `opts.client`, either type might be returned.
	* Note that the return type of the function also depends on the value of `opts.async`.
	* @public
	*/
	exports.compile = function compile(template, opts) {
		var templ;
		if (opts && opts.scope) {
			if (!scopeOptionWarned) {
				console.warn("`scope` option is deprecated and will be removed in EJS 3");
				scopeOptionWarned = true;
			}
			if (!opts.context) opts.context = opts.scope;
			delete opts.scope;
		}
		templ = new Template(template, opts);
		return templ.compile();
	};
	/**
	* Render the given `template` of ejs.
	*
	* If you would like to include options but not data, you need to explicitly
	* call this function with `data` being an empty object or `null`.
	*
	* @param {String}   template EJS template
	* @param {Object}  [data={}] template data
	* @param {Options} [opts={}] compilation and rendering options
	* @return {(String|Promise<String>)}
	* Return value type depends on `opts.async`.
	* @public
	*/
	exports.render = function(template, d, o) {
		var data = d || utils.createNullProtoObjWherePossible();
		var opts = o || utils.createNullProtoObjWherePossible();
		if (arguments.length == 2) utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
		return handleCache(opts, template)(data);
	};
	/**
	* Render an EJS file at the given `path` and callback `cb(err, str)`.
	*
	* If you would like to include options but not data, you need to explicitly
	* call this function with `data` being an empty object or `null`.
	*
	* @param {String}             path     path to the EJS file
	* @param {Object}            [data={}] template data
	* @param {Options}           [opts={}] compilation and rendering options
	* @param {RenderFileCallback} cb callback
	* @public
	*/
	exports.renderFile = function() {
		var args = Array.prototype.slice.call(arguments);
		var filename = args.shift();
		var cb;
		var opts = { filename };
		var data;
		var viewOpts;
		if (typeof arguments[arguments.length - 1] == "function") cb = args.pop();
		if (args.length) {
			data = args.shift();
			if (args.length) utils.shallowCopy(opts, args.pop());
			else {
				if (data.settings) {
					if (data.settings.views) opts.views = data.settings.views;
					if (data.settings["view cache"]) opts.cache = true;
					viewOpts = data.settings["view options"];
					if (viewOpts) utils.shallowCopy(opts, viewOpts);
				}
				utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
			}
			opts.filename = filename;
		} else data = utils.createNullProtoObjWherePossible();
		return tryHandleCache(opts, data, cb);
	};
	/**
	* Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
	* @public
	*/
	/**
	* EJS template class
	* @public
	*/
	exports.Template = Template;
	exports.clearCache = function() {
		exports.cache.reset();
	};
	function Template(text, optsParam) {
		var opts = utils.hasOwnOnlyObject(optsParam);
		var options = utils.createNullProtoObjWherePossible();
		this.templateText = text;
		/** @type {string | null} */
		this.mode = null;
		this.truncate = false;
		this.currentLine = 1;
		this.source = "";
		options.client = opts.client || false;
		options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
		options.compileDebug = opts.compileDebug !== false;
		options.debug = !!opts.debug;
		options.filename = opts.filename;
		options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
		options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
		options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
		options.strict = opts.strict || false;
		options.context = opts.context;
		options.cache = opts.cache || false;
		options.rmWhitespace = opts.rmWhitespace;
		options.root = opts.root;
		options.includer = opts.includer;
		options.outputFunctionName = opts.outputFunctionName;
		options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
		options.views = opts.views;
		options.async = opts.async;
		options.destructuredLocals = opts.destructuredLocals;
		options.legacyInclude = typeof opts.legacyInclude != "undefined" ? !!opts.legacyInclude : true;
		if (options.strict) options._with = false;
		else options._with = typeof opts._with != "undefined" ? opts._with : true;
		this.opts = options;
		this.regex = this.createRegex();
	}
	Template.modes = {
		EVAL: "eval",
		ESCAPED: "escaped",
		RAW: "raw",
		COMMENT: "comment",
		LITERAL: "literal"
	};
	Template.prototype = {
		createRegex: function() {
			var str = _REGEX_STRING;
			var delim = utils.escapeRegExpChars(this.opts.delimiter);
			var open = utils.escapeRegExpChars(this.opts.openDelimiter);
			var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
			str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
			return new RegExp(str);
		},
		compile: function() {
			/** @type {string} */
			var src;
			/** @type {ClientFunction} */
			var fn;
			var opts = this.opts;
			var prepended = "";
			var appended = "";
			/** @type {EscapeCallback} */
			var escapeFn = opts.escapeFunction;
			/** @type {FunctionConstructor} */
			var ctor;
			/** @type {string} */
			var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : "undefined";
			if (!this.source) {
				this.generateSource();
				prepended += "  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";
				if (opts.outputFunctionName) {
					if (!_JS_IDENTIFIER.test(opts.outputFunctionName)) throw new Error("outputFunctionName is not a valid JS identifier.");
					prepended += "  var " + opts.outputFunctionName + " = __append;\n";
				}
				if (opts.localsName && !_JS_IDENTIFIER.test(opts.localsName)) throw new Error("localsName is not a valid JS identifier.");
				if (opts.destructuredLocals && opts.destructuredLocals.length) {
					var destructuring = "  var __locals = (" + opts.localsName + " || {}),\n";
					for (var i = 0; i < opts.destructuredLocals.length; i++) {
						var name = opts.destructuredLocals[i];
						if (!_JS_IDENTIFIER.test(name)) throw new Error("destructuredLocals[" + i + "] is not a valid JS identifier.");
						if (i > 0) destructuring += ",\n  ";
						destructuring += name + " = __locals." + name;
					}
					prepended += destructuring + ";\n";
				}
				if (opts._with !== false) {
					prepended += "  with (" + opts.localsName + " || {}) {\n";
					appended += "  }\n";
				}
				appended += "  return __output;\n";
				this.source = prepended + this.source + appended;
			}
			if (opts.compileDebug) src = "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + sanitizedFilename + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n";
			else src = this.source;
			if (opts.client) {
				src = "escapeFn = escapeFn || " + escapeFn.toString() + ";\n" + src;
				if (opts.compileDebug) src = "rethrow = rethrow || " + rethrow.toString() + ";\n" + src;
			}
			if (opts.strict) src = "\"use strict\";\n" + src;
			if (opts.debug) console.log(src);
			if (opts.compileDebug && opts.filename) src = src + "\n//# sourceURL=" + sanitizedFilename + "\n";
			try {
				if (opts.async) try {
					ctor = new Function("return (async function(){}).constructor;")();
				} catch (e) {
					if (e instanceof SyntaxError) throw new Error("This environment does not support async/await");
					else throw e;
				}
				else ctor = Function;
				fn = new ctor(opts.localsName + ", escapeFn, include, rethrow", src);
			} catch (e) {
				// istanbul ignore else
				if (e instanceof SyntaxError) {
					if (opts.filename) e.message += " in " + opts.filename;
					e.message += " while compiling ejs\n\n";
					e.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
					e.message += "https://github.com/RyanZim/EJS-Lint";
					if (!opts.async) {
						e.message += "\n";
						e.message += "Or, if you meant to create an async function, pass `async: true` as an option.";
					}
				}
				throw e;
			}
			var returnedFn = opts.client ? fn : function anonymous(data) {
				var include = function(path, includeData) {
					var d = utils.shallowCopy(utils.createNullProtoObjWherePossible(), data);
					if (includeData) d = utils.shallowCopy(d, includeData);
					return includeFile(path, opts)(d);
				};
				return fn.apply(opts.context, [
					data || utils.createNullProtoObjWherePossible(),
					escapeFn,
					include,
					rethrow
				]);
			};
			if (opts.filename && typeof Object.defineProperty === "function") {
				var filename = opts.filename;
				var basename = path$2.basename(filename, path$2.extname(filename));
				try {
					Object.defineProperty(returnedFn, "name", {
						value: basename,
						writable: false,
						enumerable: false,
						configurable: true
					});
				} catch (e) {}
			}
			return returnedFn;
		},
		generateSource: function() {
			if (this.opts.rmWhitespace) this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
			this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
			var self = this;
			var matches = this.parseTemplateText();
			var d = this.opts.delimiter;
			var o = this.opts.openDelimiter;
			var c = this.opts.closeDelimiter;
			if (matches && matches.length) matches.forEach(function(line, index) {
				var closing;
				if (line.indexOf(o + d) === 0 && line.indexOf(o + d + d) !== 0) {
					closing = matches[index + 2];
					if (!(closing == d + c || closing == "-" + d + c || closing == "_" + d + c)) throw new Error("Could not find matching close tag for \"" + line + "\".");
				}
				self.scanLine(line);
			});
		},
		parseTemplateText: function() {
			var str = this.templateText;
			var pat = this.regex;
			var result = pat.exec(str);
			var arr = [];
			var firstPos;
			while (result) {
				firstPos = result.index;
				if (firstPos !== 0) {
					arr.push(str.substring(0, firstPos));
					str = str.slice(firstPos);
				}
				arr.push(result[0]);
				str = str.slice(result[0].length);
				result = pat.exec(str);
			}
			if (str) arr.push(str);
			return arr;
		},
		_addOutput: function(line) {
			if (this.truncate) {
				line = line.replace(/^(?:\r\n|\r|\n)/, "");
				this.truncate = false;
			}
			if (!line) return line;
			line = line.replace(/\\/g, "\\\\");
			line = line.replace(/\n/g, "\\n");
			line = line.replace(/\r/g, "\\r");
			line = line.replace(/"/g, "\\\"");
			this.source += "    ; __append(\"" + line + "\")\n";
		},
		scanLine: function(line) {
			var self = this;
			var d = this.opts.delimiter;
			var o = this.opts.openDelimiter;
			var c = this.opts.closeDelimiter;
			var newLineCount = 0;
			newLineCount = line.split("\n").length - 1;
			switch (line) {
				case o + d:
				case o + d + "_":
					this.mode = Template.modes.EVAL;
					break;
				case o + d + "=":
					this.mode = Template.modes.ESCAPED;
					break;
				case o + d + "-":
					this.mode = Template.modes.RAW;
					break;
				case o + d + "#":
					this.mode = Template.modes.COMMENT;
					break;
				case o + d + d:
					this.mode = Template.modes.LITERAL;
					this.source += "    ; __append(\"" + line.replace(o + d + d, o + d) + "\")\n";
					break;
				case d + d + c:
					this.mode = Template.modes.LITERAL;
					this.source += "    ; __append(\"" + line.replace(d + d + c, d + c) + "\")\n";
					break;
				case d + c:
				case "-" + d + c:
				case "_" + d + c:
					if (this.mode == Template.modes.LITERAL) this._addOutput(line);
					this.mode = null;
					this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
					break;
				default: if (this.mode) {
					switch (this.mode) {
						case Template.modes.EVAL:
						case Template.modes.ESCAPED:
						case Template.modes.RAW: if (line.lastIndexOf("//") > line.lastIndexOf("\n")) line += "\n";
					}
					switch (this.mode) {
						case Template.modes.EVAL:
							this.source += "    ; " + line + "\n";
							break;
						case Template.modes.ESCAPED:
							this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))\n";
							break;
						case Template.modes.RAW:
							this.source += "    ; __append(" + stripSemi(line) + ")\n";
							break;
						case Template.modes.COMMENT: break;
						case Template.modes.LITERAL:
							this._addOutput(line);
							break;
					}
				} else this._addOutput(line);
			}
			if (self.opts.compileDebug && newLineCount) {
				this.currentLine += newLineCount;
				this.source += "    ; __line = " + this.currentLine + "\n";
			}
		}
	};
	/**
	* Escape characters reserved in XML.
	*
	* This is simply an export of {@link module:utils.escapeXML}.
	*
	* If `markup` is `undefined` or `null`, the empty string is returned.
	*
	* @param {String} markup Input string
	* @return {String} Escaped string
	* @public
	* @func
	* */
	exports.escapeXML = utils.escapeXML;
	/**
	* Express.js support.
	*
	* This is an alias for {@link module:ejs.renderFile}, in order to support
	* Express.js out-of-the-box.
	*
	* @func
	*/
	exports.__express = exports.renderFile;
	/**
	* Version of EJS.
	*
	* @readonly
	* @type {String}
	* @public
	*/
	exports.VERSION = _VERSION_STRING;
	/**
	* Name for detection of EJS.
	*
	* @readonly
	* @type {String}
	* @public
	*/
	exports.name = _NAME;
	/* istanbul ignore if */
	if (typeof window != "undefined") window.ejs = exports;
}));
//#endregion
//#region utils/banners.ts
var import_picocolors = require_picocolors();
var import_ejs = /* @__PURE__ */ __toESM(require_ejs(), 1);
const defaultBanner = "Rue.js - The Progressive JavaScript Framework";
const gradientBanner = "\x1B[38;2;66;211;146mV\x1B[39m\x1B[38;2;66;211;146mu\x1B[39m\x1B[38;2;66;211;146me\x1B[39m\x1B[38;2;66;211;146m.\x1B[39m\x1B[38;2;66;211;146mj\x1B[39m\x1B[38;2;67;209;149ms\x1B[39m \x1B[38;2;68;206;152m-\x1B[39m \x1B[38;2;69;204;155mT\x1B[39m\x1B[38;2;70;201;158mh\x1B[39m\x1B[38;2;71;199;162me\x1B[39m \x1B[38;2;72;196;165mP\x1B[39m\x1B[38;2;73;194;168mr\x1B[39m\x1B[38;2;74;192;171mo\x1B[39m\x1B[38;2;75;189;174mg\x1B[39m\x1B[38;2;76;187;177mr\x1B[39m\x1B[38;2;77;184;180me\x1B[39m\x1B[38;2;78;182;183ms\x1B[39m\x1B[38;2;79;179;186ms\x1B[39m\x1B[38;2;80;177;190mi\x1B[39m\x1B[38;2;81;175;193mv\x1B[39m\x1B[38;2;82;172;196me\x1B[39m \x1B[38;2;83;170;199mJ\x1B[39m\x1B[38;2;83;167;202ma\x1B[39m\x1B[38;2;84;165;205mv\x1B[39m\x1B[38;2;85;162;208ma\x1B[39m\x1B[38;2;86;160;211mS\x1B[39m\x1B[38;2;87;158;215mc\x1B[39m\x1B[38;2;88;155;218mr\x1B[39m\x1B[38;2;89;153;221mi\x1B[39m\x1B[38;2;90;150;224mp\x1B[39m\x1B[38;2;91;148;227mt\x1B[39m \x1B[38;2;92;145;230mF\x1B[39m\x1B[38;2;93;143;233mr\x1B[39m\x1B[38;2;94;141;236ma\x1B[39m\x1B[38;2;95;138;239mm\x1B[39m\x1B[38;2;96;136;243me\x1B[39m\x1B[38;2;97;133;246mw\x1B[39m\x1B[38;2;98;131;249mo\x1B[39m\x1B[38;2;99;128;252mr\x1B[39m\x1B[38;2;100;126;255mk\x1B[39m";
//#endregion
//#region utils/deepMerge.ts
const isObject = (val) => val && typeof val === "object";
const mergeArrayWithDedupe = (a, b) => Array.from(new Set([...a, ...b]));
/**
* Recursively merge the content of the new object to the existing one
* @param {Object} target the existing object
* @param {Object} obj the new object
*/
function deepMerge(target, obj) {
	for (const key of Object.keys(obj)) {
		const oldVal = target[key];
		const newVal = obj[key];
		if (Array.isArray(oldVal) && Array.isArray(newVal)) target[key] = mergeArrayWithDedupe(oldVal, newVal);
		else if (isObject(oldVal) && isObject(newVal)) target[key] = deepMerge(oldVal, newVal);
		else target[key] = newVal;
	}
	return target;
}
//#endregion
//#region utils/sortDependencies.ts
function sortDependencies(packageJson) {
	const sorted = {};
	for (const depType of [
		"dependencies",
		"devDependencies",
		"peerDependencies",
		"optionalDependencies"
	]) if (packageJson[depType]) {
		sorted[depType] = {};
		Object.keys(packageJson[depType]).sort().forEach((name) => {
			sorted[depType][name] = packageJson[depType][name];
		});
	}
	return {
		...packageJson,
		...sorted
	};
}
//#endregion
//#region utils/renderTemplate.ts
/**
* Renders a template folder/file to the file system,
* by recursively copying all files under the `src` directory,
* with the following exception:
*   - `_filename` should be renamed to `.filename`
*   - Fields in `package.json` should be recursively merged
* @param {string} src source filename to copy
* @param {string} dest destination filename of the copy operation
*/
function renderTemplate(src, dest, callbacks) {
	if (fs.statSync(src).isDirectory()) {
		if (path$1.basename(src) === "node_modules") return;
		fs.mkdirSync(dest, { recursive: true });
		for (const file of fs.readdirSync(src)) renderTemplate(path$1.resolve(src, file), path$1.resolve(dest, file), callbacks);
		return;
	}
	const filename = path$1.basename(src);
	if (filename === "package.json" && fs.existsSync(dest)) {
		const pkg = sortDependencies(deepMerge(JSON.parse(fs.readFileSync(dest, "utf8")), JSON.parse(fs.readFileSync(src, "utf8"))));
		fs.writeFileSync(dest, JSON.stringify(pkg, null, 2) + "\n");
		return;
	}
	if (filename === "extensions.json" && fs.existsSync(dest)) {
		const extensions = deepMerge(JSON.parse(fs.readFileSync(dest, "utf8")), JSON.parse(fs.readFileSync(src, "utf8")));
		fs.writeFileSync(dest, JSON.stringify(extensions, null, 2) + "\n");
		return;
	}
	if (filename === "settings.json" && fs.existsSync(dest)) {
		const settings = deepMerge(JSON.parse(fs.readFileSync(dest, "utf8")), JSON.parse(fs.readFileSync(src, "utf8")));
		fs.writeFileSync(dest, JSON.stringify(settings, null, 2) + "\n");
		return;
	}
	if (filename.startsWith("_")) dest = path$1.resolve(path$1.dirname(dest), filename.replace(/^_/, "."));
	if (filename === "_gitignore" && fs.existsSync(dest)) {
		const existing = fs.readFileSync(dest, "utf8");
		const newGitignore = fs.readFileSync(src, "utf8");
		fs.writeFileSync(dest, existing + "\n" + newGitignore);
		return;
	}
	if (filename.endsWith(".data.mjs")) {
		dest = dest.replace(/\.data\.mjs$/, "");
		callbacks.push(async (dataStore) => {
			const getData = (await import(pathToFileURL(src).toString())).default;
			dataStore[dest] = await getData({ oldData: dataStore[dest] || {} });
		});
		return;
	}
	fs.copyFileSync(src, dest);
}
//#endregion
//#region utils/directoryTraverse.ts
function preOrderDirectoryTraverse(dir, dirCallback, fileCallback) {
	for (const filename of fs.readdirSync(dir)) {
		if (filename === ".git") continue;
		const fullpath = path$1.resolve(dir, filename);
		if (fs.lstatSync(fullpath).isDirectory()) {
			dirCallback(fullpath);
			if (fs.existsSync(fullpath)) preOrderDirectoryTraverse(fullpath, dirCallback, fileCallback);
			continue;
		}
		fileCallback(fullpath);
	}
}
const dotGitDirectoryState = { hasDotGitDirectory: false };
function postOrderDirectoryTraverse(dir, dirCallback, fileCallback) {
	for (const filename of fs.readdirSync(dir)) {
		if (filename === ".git") {
			dotGitDirectoryState.hasDotGitDirectory = true;
			continue;
		}
		const fullpath = path$1.resolve(dir, filename);
		if (fs.lstatSync(fullpath).isDirectory()) {
			postOrderDirectoryTraverse(fullpath, dirCallback, fileCallback);
			dirCallback(fullpath);
			continue;
		}
		fileCallback(fullpath);
	}
}
//#endregion
//#region utils/getCommand.ts
function getCommand(packageManager, scriptName, args) {
	if (scriptName === "install") return packageManager === "yarn" ? "yarn" : `${packageManager} install`;
	if (scriptName === "build") return packageManager === "npm" || packageManager === "bun" ? `${packageManager} run build` : `${packageManager} build`;
	if (args) return packageManager === "npm" ? `npm run ${scriptName} -- ${args}` : `${packageManager} ${scriptName} ${args}`;
	else return packageManager === "npm" ? `npm run ${scriptName}` : `${packageManager} ${scriptName}`;
}
//#endregion
//#region utils/generateReadme.ts
const sfcTypeSupportDoc = [
	"",
	"## Type Support for `.rue` Imports in TS",
	"",
	"TypeScript cannot handle type information for `.rue` imports by default, so we replace the `tsc` CLI with `rue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Rue.volar) to make the TypeScript language service aware of `.rue` types.",
	""
].join("\n");
function generateReadme({ projectName, packageManager, needsTypeScript, needsCypress, needsCypressCT, needsPlaywright, needsVitest, needsEslint }) {
	const commandFor = (scriptName, args) => getCommand(packageManager, scriptName, args);
	let readme = `# ${projectName}

This template should help get you started developing with Rue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Rue (Official)](https://marketplace.visualstudio.com/items?itemName=Rue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Rue.js devtools](https://chromewebstore.google.com/detail/ruejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Rue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/rue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)
${needsTypeScript ? sfcTypeSupportDoc : ""}
## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

`;
	let npmScriptsDescriptions = `\`\`\`sh
${commandFor("install")}
\`\`\`

### Compile and Hot-Reload for Development

\`\`\`sh
${commandFor("dev")}
\`\`\`

### ${needsTypeScript ? "Type-Check, " : ""}Compile and Minify for Production

\`\`\`sh
${commandFor("build")}
\`\`\`
`;
	if (needsVitest) npmScriptsDescriptions += `
### Run Unit Tests with [Vitest](https://vitest.dev/)

\`\`\`sh
${commandFor("test:unit")}
\`\`\`
`;
	if (needsCypressCT) npmScriptsDescriptions += `
### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

\`\`\`sh
${commandFor("test:unit:dev")} # or \`${commandFor("test:unit")}\` for headless testing
\`\`\`
`;
	if (needsCypress) npmScriptsDescriptions += `
### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

\`\`\`sh
${commandFor("test:e2e:dev")}
\`\`\`

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with \`test:e2e\` before deploying (e.g. in CI environments):

\`\`\`sh
${commandFor("build")}
${commandFor("test:e2e")}
\`\`\`
`;
	if (needsPlaywright) npmScriptsDescriptions += `
### Run End-to-End Tests with [Playwright](https://playwright.dev)

\`\`\`sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
${commandFor("build")}

# Runs the end-to-end tests
${commandFor("test:e2e")}
# Runs the tests only on Chromium
${commandFor("test:e2e", "--project=chromium")}
# Runs the tests of a specific file
${commandFor("test:e2e", "tests/example.spec.ts")}
# Runs the tests in debug mode
${commandFor("test:e2e", "--debug")}
\`\`\`
`;
	if (needsEslint) npmScriptsDescriptions += `
### Lint with [ESLint](https://eslint.org/)

\`\`\`sh
${commandFor("lint")}
\`\`\`
`;
	readme += npmScriptsDescriptions;
	return readme;
}
//#endregion
//#region utils/getLanguage.ts
/**
*
* This function is used to link obtained locale with correct locale file in order to make locales reusable
*
* @param locale the obtained locale
* @returns locale that linked with correct name
*/
function linkLocale(locale) {
	if (locale === "C") return "en-US";
	let linkedLocale;
	try {
		linkedLocale = Intl.getCanonicalLocales(locale)[0];
	} catch (error) {
		console.log(`${error.toString()}, invalid language tag: "${locale}"\n`);
	}
	switch (linkedLocale) {
		case "zh-TW":
		case "zh-HK":
		case "zh-MO":
			linkedLocale = "zh-Hant";
			break;
		case "zh-CN":
		case "zh-SG":
			linkedLocale = "zh-Hans";
			break;
		default: linkedLocale = locale;
	}
	return linkedLocale;
}
function getLocale() {
	return linkLocale((process.env.LC_ALL || process.env.LC_MESSAGES || process.env.LANG || Intl.DateTimeFormat().resolvedOptions().locale || "en-US").split(".")[0].replace("_", "-"));
}
async function loadLanguageFile(filePath) {
	return await fs.promises.readFile(filePath, "utf-8").then((data) => {
		const parsedData = JSON.parse(data);
		if (parsedData) return parsedData;
	});
}
async function getLanguage(localesRoot) {
	const locale = getLocale();
	const languageFilePath = path$1.resolve(localesRoot, `${locale}.json`);
	const fallbackPath = path$1.resolve(localesRoot, "en-US.json");
	return fs.existsSync(languageFilePath) ? await loadLanguageFile(languageFilePath) : await loadLanguageFile(fallbackPath);
}
//#endregion
//#region utils/trimBoilerplate.ts
function replaceContent(filepath, replacer) {
	const content = fs.readFileSync(filepath, "utf8");
	fs.writeFileSync(filepath, replacer(content));
}
function trimBoilerplate(rootDir) {
	const srcDir = path.resolve(rootDir, "src");
	for (const filename of fs.readdirSync(srcDir)) {
		if ([
			"main.js",
			"main.ts",
			"router",
			"stores"
		].includes(filename)) continue;
		const fullpath = path.resolve(srcDir, filename);
		fs.rmSync(fullpath, { recursive: true });
	}
}
function removeCSSImport(rootDir, needsTypeScript, needsCypressCT) {
	replaceContent(path.resolve(rootDir, needsTypeScript ? "src/main.ts" : "src/main.js"), (content) => content.replace("import './assets/main.css'\n\n", ""));
	if (needsCypressCT) replaceContent(path.resolve(rootDir, needsTypeScript ? "cypress/support/component.ts" : "cypress/support/component.js"), (content) => content.replace("import '@/assets/main.css'", "// import '@/assets/main.css'"));
}
function emptyRouterConfig(rootDir, needsTypeScript) {
	const srcDir = path.resolve(rootDir, "src");
	replaceContent(path.resolve(srcDir, needsTypeScript ? "router/index.ts" : "router/index.js"), (content) => content.replace(`import HomeView from '../views/HomeView.rue'\n`, "").replace(/routes:\s*\[[\s\S]*?\],/, "routes: [],"));
}
//#endregion
//#region utils/applyRueBeta.ts
const CORE_RUE_PACKAGES = [
	"rue",
	"@rue/compiler-core",
	"@rue/compiler-dom",
	"@rue/compiler-sfc",
	"@rue/compiler-ssr",
	"@rue/compiler-vapor",
	"@rue/reactivity",
	"@rue/runtime-core",
	"@rue/runtime-dom",
	"@rue/runtime-vapor",
	"@rue/server-renderer",
	"@rue/shared",
	"@rue/compat"
];
function generateOverridesMap() {
	return Object.fromEntries(CORE_RUE_PACKAGES.map((name) => [name, "beta"]));
}
/**
* Apply Rue 3.6 beta overrides to the project based on the package manager.
* Different package managers have different mechanisms for version overrides:
* - npm/bun: uses `overrides` field in package.json
* - yarn: uses `resolutions` field in package.json
* - pnpm: uses `overrides` and `peerDependencyRules` in pnpm-workspace.yaml
*/
function applyRueBeta(root, packageManager, pkg) {
	const overrides = generateOverridesMap();
	if (packageManager === "npm" || packageManager === "bun") {
		pkg.overrides = {
			...pkg.overrides,
			...overrides
		};
		for (const dependencyName of CORE_RUE_PACKAGES) for (const dependencyType of [
			"dependencies",
			"devDependencies",
			"optionalDependencies"
		]) if (pkg[dependencyType]?.[dependencyName]) pkg[dependencyType][dependencyName] = overrides[dependencyName];
	} else if (packageManager === "yarn") pkg.resolutions = {
		...pkg.resolutions,
		...overrides
	};
	else if (packageManager === "pnpm") {
		const yamlContent = `overrides:
${Object.entries(overrides).map(([key, value]) => `  '${key}': '${value}'`).join("\n")}

peerDependencyRules:
  allowAny:
    - 'rue'
`;
		fs.writeFileSync(path$1.resolve(root, "pnpm-workspace.yaml"), yamlContent, "utf-8");
	}
}
//#endregion
//#region utils/packageManager.ts
/**
* Infers the package manager from the user agent string.
* Falls back to npm if unable to detect.
*/
function inferPackageManager() {
	const userAgent = process.env.npm_config_user_agent ?? "";
	if (/pnpm/.test(userAgent)) return "pnpm";
	if (/yarn/.test(userAgent)) return "yarn";
	if (/bun/.test(userAgent)) return "bun";
	return "npm";
}
/**
* Creates an ordered list of package managers with the preferred one first.
*/
function getPackageManagerOptions(preferred) {
	return [preferred, ...[
		"npm",
		"pnpm",
		"yarn",
		"bun"
	].filter((pm) => pm !== preferred)];
}
//#endregion
//#region package.json
var name = "create-rue";
var version = "0.0.4";
//#endregion
//#region index.ts
const language = await getLanguage(fileURLToPath(new URL("./locales", import.meta.url)));
const FEATURE_FLAGS = [
	"default",
	"ts",
	"typescript",
	"jsx",
	"router",
	"rue-router",
	"pinia",
	"tests",
	"with-tests",
	"vitest",
	"cypress",
	"playwright",
	"eslint",
	"prettier",
	"eslint-with-prettier",
	"oxlint",
	"oxfmt",
	"rue-beta"
];
const FEATURE_OPTIONS = [
	{
		value: "jsx",
		label: language.needsJsx.message
	},
	{
		value: "router",
		label: language.needsRouter.message
	},
	{
		value: "pinia",
		label: language.needsPinia.message
	},
	{
		value: "vitest",
		label: language.needsVitest.message
	},
	{
		value: "e2e",
		label: language.needsE2eTesting.message
	},
	{
		value: "eslint",
		label: language.needsEslint.message
	},
	{
		value: "prettier",
		label: language.needsPrettier.message
	}
];
const EXPERIMENTAL_FEATURE_OPTIONS = [{
	value: "oxfmt",
	label: language.needsOxfmt.message
}, {
	value: "rue-beta",
	label: language.needsRueBeta.message
}];
function isValidPackageName(projectName) {
	return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName);
}
function toValidPackageName(projectName) {
	return projectName.trim().toLowerCase().replace(/\s+/g, "-").replace(/^[._]/, "").replace(/[^a-z0-9-~]+/g, "-");
}
function canSkipEmptying(dir) {
	if (!fs.existsSync(dir)) return true;
	const files = fs.readdirSync(dir);
	if (files.length === 0) return true;
	if (files.length === 1 && files[0] === ".git") {
		dotGitDirectoryState.hasDotGitDirectory = true;
		return true;
	}
	return false;
}
function emptyDir(dir) {
	if (!fs.existsSync(dir)) return;
	postOrderDirectoryTraverse(dir, (dir) => fs.rmdirSync(dir), (file) => fs.unlinkSync(file));
}
async function unwrapPrompt(maybeCancelPromise) {
	const result = await maybeCancelPromise;
	if (q(result)) {
		pt((0, import_picocolors.red)("✖") + ` ${language.errors.operationCancelled}`);
		process.exit(0);
	}
	return result;
}
const helpMessage = `\
Usage: create-rue [FEATURE_FLAGS...] [OPTIONS...] [DIRECTORY]

Create a new Rue.js project.
Runs in interactive mode if started without feature flags, or if DIRECTORY is missing or not a valid package name.

Options:
  --force
    Create the project even if the directory is not empty.
  --bare
    Create a barebone project without example code.
  --help
    Display this help message.
  --version
    Display the version number of this CLI.

Available feature flags:
  --default
    Create a project with the default configuration without any additional features.
  --ts, --typescript
    Add TypeScript support.
  --jsx
    Add JSX support.
  --router, --rue-router
    Add Rue Router for SPA development.
  --pinia
    Add Pinia for state management.
  --vitest
    Add Vitest for unit testing.
  --cypress
    Add Cypress for end-to-end testing.
    If used without ${(0, import_picocolors.cyan)("--vitest")}, it will also add Cypress Component Testing.
  --playwright
    Add Playwright for end-to-end testing.
  --eslint
    Add ESLint for code quality.
  --prettier
    Add Prettier for code formatting.
  --oxfmt
    Add Oxfmt for code formatting.
  --rue-beta
    Use Rue 3.6 Beta. Requires specifying a package manager in interactive mode.

Unstable feature flags:
  --tests, --with-tests
    Add both unit testing and end-to-end testing support.
    Currently equivalent to ${(0, import_picocolors.cyan)("--vitest --cypress")}, but may change in the future.

Deprecated feature flags:
  --eslint-with-prettier
    Please use ${(0, import_picocolors.cyan)("--eslint --prettier")} instead.
  --oxlint
    Oxlint is now always included when ESLint is selected.
`;
async function init() {
	const cwd = process.cwd();
	const args = process.argv.slice(2);
	const flags = [
		...FEATURE_FLAGS,
		"force",
		"bare",
		"help",
		"version"
	];
	const { values: argv, positionals } = parseArgs({
		args,
		options: Object.fromEntries(flags.map((key) => [key, { type: "boolean" }])),
		strict: true,
		allowPositionals: true
	});
	if (argv.help) {
		console.log(helpMessage);
		process.exit(0);
	}
	if (argv.version) {
		console.log(`${name} v${version}`);
		process.exit(0);
	}
	const isFeatureFlagsUsed = FEATURE_FLAGS.some((flag) => typeof argv[flag] === "boolean");
	let targetDir = positionals[0];
	const defaultProjectName = targetDir || "rue-project";
	const forceOverwrite = argv.force;
	const inferredPackageManager = inferPackageManager();
	const result = {
		projectName: defaultProjectName,
		shouldOverwrite: forceOverwrite,
		packageName: defaultProjectName,
		features: [],
		e2eFramework: void 0,
		experimentFeatures: [],
		needsBareboneTemplates: false
	};
	mt(process.stdout.isTTY && process.stdout.getColorDepth() > 8 ? gradientBanner : defaultBanner);
	if (!targetDir) targetDir = result.projectName = result.packageName = (await unwrapPrompt(Ot({
		message: language.projectName.message,
		placeholder: defaultProjectName,
		defaultValue: defaultProjectName,
		validate: (value) => !value || value.trim().length > 0 ? void 0 : language.projectName.invalidMessage
	})))?.trim() || defaultProjectName;
	if (!canSkipEmptying(targetDir) && !forceOverwrite) {
		result.shouldOverwrite = await unwrapPrompt(ot({
			message: `${targetDir === "." ? language.shouldOverwrite.dirForPrompts.current : `${language.shouldOverwrite.dirForPrompts.target} "${targetDir}"`} ${language.shouldOverwrite.message}`,
			initialValue: false
		}));
		if (!result.shouldOverwrite) {
			pt((0, import_picocolors.red)("✖") + ` ${language.errors.operationCancelled}`);
			process.exit(0);
		}
	}
	if (!isValidPackageName(targetDir)) result.packageName = await unwrapPrompt(Ot({
		message: language.packageName.message,
		initialValue: toValidPackageName(targetDir),
		validate: (value) => isValidPackageName(value) ? void 0 : language.packageName.invalidMessage
	}));
	if (!isFeatureFlagsUsed) {
		result.needsTypeScript = await unwrapPrompt(ot({
			message: language.needsTypeScript.message,
			initialValue: true
		}));
		result.features = await unwrapPrompt(yt({
			message: `${language.featureSelection.message} ${(0, import_picocolors.dim)(language.featureSelection.hint)}`,
			options: FEATURE_OPTIONS,
			required: false
		}));
		if (result.features.includes("e2e")) {
			const hasVitest = result.features.includes("vitest");
			result.e2eFramework = await unwrapPrompt(_t({
				message: `${language.e2eSelection.message} ${(0, import_picocolors.dim)(language.e2eSelection.hint)}`,
				options: [{
					value: "playwright",
					label: language.e2eSelection.selectOptions.playwright.title,
					hint: language.e2eSelection.selectOptions.playwright.desc
				}, {
					value: "cypress",
					label: language.e2eSelection.selectOptions.cypress.title,
					hint: hasVitest ? language.e2eSelection.selectOptions.cypress.desc : language.e2eSelection.selectOptions.cypress.hintOnComponentTesting
				}]
			}));
		}
		result.experimentFeatures = await unwrapPrompt(yt({
			message: `${language.needsExperimentalFeatures.message} ${(0, import_picocolors.dim)(language.needsExperimentalFeatures.hint)}`,
			options: EXPERIMENTAL_FEATURE_OPTIONS,
			required: false
		}));
		if (result.experimentFeatures.includes("rue-beta")) {
			const packageManagerOptions = getPackageManagerOptions(inferredPackageManager).map((pm) => ({
				value: pm,
				label: pm
			}));
			result.packageManager = await unwrapPrompt(_t({
				message: `${language.packageManagerSelection.message} ${(0, import_picocolors.dim)(language.packageManagerSelection.hint)}`,
				options: packageManagerOptions
			}));
		}
	}
	if (argv.bare) result.needsBareboneTemplates = true;
	else if (!isFeatureFlagsUsed) result.needsBareboneTemplates = await unwrapPrompt(ot({
		message: language.needsBareboneTemplates.message,
		initialValue: false
	}));
	const { features, experimentFeatures, needsBareboneTemplates } = result;
	const needsTypeScript = argv.ts || argv.typescript || result.needsTypeScript;
	const needsJsx = argv.jsx || features.includes("jsx");
	const needsRouter = argv.router || argv["rue-router"] || features.includes("router");
	const needsPinia = argv.pinia || features.includes("pinia");
	const needsVitest = argv.vitest || argv.tests || argv["with-tests"] || features.includes("vitest");
	const needsEslint = argv.eslint || argv["eslint-with-prettier"] || features.includes("eslint");
	const needsPrettier = argv.prettier || argv["eslint-with-prettier"] || features.includes("prettier");
	const needsOxfmt = experimentFeatures.includes("oxfmt") || argv["oxfmt"];
	const needsRueBeta = experimentFeatures.includes("rue-beta") || argv["rue-beta"];
	const { e2eFramework } = result;
	const needsCypress = argv.cypress || argv.tests || argv["with-tests"] || e2eFramework === "cypress";
	const needsCypressCT = needsCypress && !needsVitest;
	const needsPlaywright = argv.playwright || e2eFramework === "playwright";
	const root = path$1.join(cwd, targetDir);
	if (fs.existsSync(root) && result.shouldOverwrite) emptyDir(root);
	else if (!fs.existsSync(root)) fs.mkdirSync(root);
	console.log(`\n${language.infos.scaffolding} ${root}...`);
	const pkg = {
		name: result.packageName,
		version: "0.0.0"
	};
	fs.writeFileSync(path$1.resolve(root, "package.json"), JSON.stringify(pkg, null, 2));
	const templateRoot = fileURLToPath(new URL("./template", import.meta.url));
	const callbacks = [];
	const render = function render(templateName) {
		renderTemplate(path$1.resolve(templateRoot, templateName), root, callbacks);
	};
	render("base");
	if (needsJsx) render("config/jsx");
	if (needsRouter) render("config/router");
	if (needsPinia) render("config/pinia");
	if (needsVitest) render("config/vitest");
	if (needsCypress) render("config/cypress");
	if (needsCypressCT) render("config/cypress-ct");
	if (needsPlaywright) render("config/playwright");
	if (needsTypeScript) {
		render("config/typescript");
		render("tsconfig/base");
		const rootTsConfig = {
			files: [],
			references: [{ path: "./tsconfig.node.json" }, { path: "./tsconfig.app.json" }]
		};
		if (needsCypress) render("tsconfig/cypress");
		if (needsCypressCT) {
			render("tsconfig/cypress-ct");
			rootTsConfig.references.push({ path: "./tsconfig.cypress-ct.json" });
		}
		if (needsPlaywright) render("tsconfig/playwright");
		if (needsVitest) {
			render("tsconfig/vitest");
			rootTsConfig.references.push({ path: "./tsconfig.vitest.json" });
		}
		fs.writeFileSync(path$1.resolve(root, "tsconfig.json"), JSON.stringify(rootTsConfig, null, 2) + "\n", "utf-8");
	}
	if (needsEslint) {
		render("linting/base");
		if (needsTypeScript) render("linting/core/ts");
		else render("linting/core/js");
		if (needsCypress) render("linting/cypress");
		if (needsCypressCT) render("linting/cypress-ct");
		if (needsPlaywright) render("linting/playwright");
		if (needsVitest) render("linting/vitest");
		render("linting/oxlint");
		callbacks.push(async (dataStore) => {
			const oxlintrcPath = path$1.resolve(root, ".oxlintrc.json");
			dataStore[oxlintrcPath] = {
				needsTypeScript,
				needsVitest
			};
		});
		if (needsPrettier || needsOxfmt) render("linting/formatter");
	}
	if (needsOxfmt) render("formatting/oxfmt");
	else if (needsPrettier) render("formatting/prettier");
	render(`code/${(needsTypeScript ? "typescript-" : "") + (needsRouter ? "router" : "default")}`);
	if (needsPinia && needsRouter) render("entry/router-and-pinia");
	else if (needsPinia) render("entry/pinia");
	else if (needsRouter) render("entry/router");
	else render("entry/default");
	const dataStore = {};
	for (const cb of callbacks) await cb(dataStore);
	preOrderDirectoryTraverse(root, () => {}, (filepath) => {
		if (filepath.endsWith(".ejs")) {
			const template = fs.readFileSync(filepath, "utf-8");
			const dest = filepath.replace(/\.ejs$/, "");
			const content = import_ejs.render(template, dataStore[dest]);
			fs.writeFileSync(dest, content);
			fs.unlinkSync(filepath);
		}
	});
	if (needsBareboneTemplates) {
		trimBoilerplate(root);
		render("bare/base");
		if (needsTypeScript) render("bare/typescript");
		if (needsVitest) render("bare/vitest");
		if (needsCypressCT) render("bare/cypress-ct");
	}
	if (needsTypeScript) {
		preOrderDirectoryTraverse(root, () => {}, (filepath) => {
			if (filepath.endsWith(".js")) {
				const tsFilePath = filepath.replace(/\.js$/, ".ts");
				if (fs.existsSync(tsFilePath)) fs.unlinkSync(filepath);
				else fs.renameSync(filepath, tsFilePath);
			} else if (path$1.basename(filepath) === "jsconfig.json") fs.unlinkSync(filepath);
		});
		const indexHtmlPath = path$1.resolve(root, "index.html");
		const indexHtmlContent = fs.readFileSync(indexHtmlPath, "utf8");
		fs.writeFileSync(indexHtmlPath, indexHtmlContent.replace("src/main.js", "src/main.ts"));
	} else preOrderDirectoryTraverse(root, () => {}, (filepath) => {
		if (filepath.endsWith(".ts")) fs.unlinkSync(filepath);
	});
	if (needsBareboneTemplates) {
		removeCSSImport(root, needsTypeScript, needsCypressCT);
		if (needsRouter) emptyRouterConfig(root, needsTypeScript);
	}
	const packageManager = result.packageManager ?? inferredPackageManager;
	if (needsRueBeta) {
		const pkgPath = path$1.resolve(root, "package.json");
		const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
		applyRueBeta(root, packageManager, pkg);
		fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
	}
	fs.writeFileSync(path$1.resolve(root, "README.md"), generateReadme({
		projectName: result.projectName ?? result.packageName ?? defaultProjectName,
		packageManager,
		needsTypeScript,
		needsVitest,
		needsCypress,
		needsPlaywright,
		needsCypressCT,
		needsEslint
	}));
	let outroMessage = `${language.infos.done}\n\n`;
	if (root !== cwd) {
		const cdProjectName = path$1.relative(cwd, root);
		outroMessage += `   ${(0, import_picocolors.bold)((0, import_picocolors.green)(`cd ${cdProjectName.includes(" ") ? `"${cdProjectName}"` : cdProjectName}`))}\n`;
	}
	outroMessage += `   ${(0, import_picocolors.bold)((0, import_picocolors.green)(getCommand(packageManager, "install")))}\n`;
	if (needsPrettier || needsOxfmt) outroMessage += `   ${(0, import_picocolors.bold)((0, import_picocolors.green)(getCommand(packageManager, "format")))}\n`;
	outroMessage += `   ${(0, import_picocolors.bold)((0, import_picocolors.green)(getCommand(packageManager, "dev")))}\n`;
	if (!dotGitDirectoryState.hasDotGitDirectory) outroMessage += `
${(0, import_picocolors.dim)("|")} ${language.infos.optionalGitCommand}

   ${(0, import_picocolors.bold)((0, import_picocolors.green)("git init && git add -A && git commit -m \"initial commit\""))}`;
	gt(outroMessage);
}
init().catch((e) => {
	console.error(e);
	process.exit(1);
});
//#endregion
export {};
