/**
 * SyntaxHighlighter Brush for Command Line Interface
 * 
 * @copyright
 * Copyright (C) 2014 Jiji Sasidharan.
 */
;(function() {

	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush() {
		this.regexList = [
				{ regex: /^[\w @\/\\:\-\.]*(&gt;|>|\#|\$|%)+/gm,					css: 'color2' },
				{ regex: /^(?:(?!(^[\w @\/\\:\-\.]*(&gt;|>|\#|\$|%)+)).)*\S/gm,		css: 'color1' },
						 ];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['cli', 'cmd-prompt', 'shell-prompt'];

	SyntaxHighlighter.brushes.WSAdmin = Brush;

	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
	
})();
