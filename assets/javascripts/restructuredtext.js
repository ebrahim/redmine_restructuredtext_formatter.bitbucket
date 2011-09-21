// Elements definition ------------------------------------

// strong
jsToolBar.prototype.elements.strong = {
	type: 'button',
	title: 'Strong',
	fn: {
		wiki: function() { this.singleTag(" **", "** ") }
	}
}

// em
jsToolBar.prototype.elements.em = {
	type: 'button',
	title: 'Emphasized',
	fn: {
		wiki: function() { this.singleTag(" *", "* ") }
	}
}

// ins
jsToolBar.prototype.elements.ins = {
	type: 'button',
	title: 'Underline',
	fn: {
		wiki: function() { this.singleTag(":underline:`", "`") }
	}
}

// del
jsToolBar.prototype.elements.del = {
	type: 'button',
	title: 'Deleted',
	fn: {
		wiki: function() { this.singleTag(":strike:`", "`") }
	}
}

// code
jsToolBar.prototype.elements.code = {
	type: 'button',
	title: 'Code',
	fn: {
		wiki: function() { this.singleTag(' ``', '`` ') }
	}
}

// spacer
jsToolBar.prototype.elements.space1 = {type: 'space'}

// LTR block toggle
jsToolBar.prototype.elements.ltr = {
	type: 'button',
	title: 'LTR',
	fn: {
		wiki: function() {
			this.encloseLineSelection('','',function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				// If it is already LTR, un-LTR-ize it
				// Else LTR-ize it
				if (str.match(/^\s*.. class::\s*ltr\n\n/)) {
					str = str.replace(/^\s*.. class::\s*ltr\n\n/,'');
					return "\n" + str.replace(/(\n|^)(\t|  )/g,"$1");
				}
				str = str.replace(/(\n|^)/g,"$1  ");
				return "\n.. class:: ltr\n\n" + str + "\n";
			});
		}
	}
}

// RTL block toggle
jsToolBar.prototype.elements.rtl = {
	type: 'button',
	title: 'RTL',
	fn: {
		wiki: function() {
			this.encloseLineSelection('','',function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				// If it is already RTL, un-RTL-ize it
				// Else RTL-ize it
				if (str.match(/^\s*.. class::\s*rtl\n\n/)) {
					str = str.replace(/^\s*.. class::\s*rtl\n\n/,'');
					return "\n" + str.replace(/(\n|^)(\t|  )/g,"$1");
				}
				str = str.replace(/(\n|^)/g,"$1  ");
				return "\n.. class:: rtl\n\n" + str + "\n";
			});
		}
	}
}

// spacer
jsToolBar.prototype.elements.space1 = {type: 'space'}

// headings
jsToolBar.prototype.elements.h1 = {
	type: 'button',
	title: 'Heading 1',
	fn: {
		wiki: function() { 
			this.encloseLineSelection('', '',function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				str = str.replace(/^\s*["#$%'*+,-.\/:;<=>?@\\^_`|~]*\s*/, '');
				str = str.replace(/\s*["#$%'*+,-.\/:;<=>?@\\^_`|~]*\s*$/, '');
				line = Array(str.length + 1).join('=');
				str = str + "\n" + line + "\n";
				return str;
			});
		}
	}
}
jsToolBar.prototype.elements.h2 = {
	type: 'button',
	title: 'Heading 2',
	fn: {
		wiki: function() { 
			this.encloseLineSelection('', '',function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				str = str.replace(/^\s*["#$%'*+,-.\/:;<=>?@\\^_`|~]*\s*/, '');
				str = str.replace(/\s*["#$%'*+,-.\/:;<=>?@\\^_`|~]*\s*$/, '');
				line = Array(str.length + 1).join('-');
				str = str + "\n" + line + "\n";
				return str;
			});
		}
	}
}
jsToolBar.prototype.elements.h3 = {
	type: 'button',
	title: 'Heading 3',
	fn: {
		wiki: function() { 
			this.encloseLineSelection('', '',function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				str = str.replace(/^\s*["#$%'*+,-.\/:;<=>?@\\^_`|~]*\s*/, '');
				str = str.replace(/\s*["#$%'*+,-.\/:;<=>?@\\^_`|~]*\s*$/, '');
				line = Array(str.length + 1).join('~');
				str = str + "\n" + line + "\n";
				return str;
			});
		}
	}
}

// spacer
jsToolBar.prototype.elements.space2 = {type: 'space'}

// ul
jsToolBar.prototype.elements.ul = {
	type: 'button',
	title: 'Unordered list',
	fn: {
		wiki: function() {
					this.encloseLineSelection('','',function(str) {
						return str.replace(/((?:\n|^)\s*)([#*]|\d+\.)?\s*/g,"$1* ");
					});
				}
	}
}

// ol
jsToolBar.prototype.elements.ol = {
	type: 'button',
	title: 'Ordered list',
	fn: {
		wiki: function() {
					this.encloseLineSelection('','',function(str) {
						return str.replace(/((?:\n|^)\s*)([#*]|\d+\.)?\s*/g,"$1#\. ");
					});
				}
	}
}

// spacer
jsToolBar.prototype.elements.space3 = {type: 'space'}

// bq
jsToolBar.prototype.elements.bq = {
	type: 'button',
	title: 'Quote',
	fn: {
		wiki: function() {
			return this.encloseLineSelection('', "\n", function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				return str.replace(/(\n|^)/g,"$1  ");
			});
		}
	}
}

// unbq
jsToolBar.prototype.elements.unbq = {
	type: 'button',
	title: 'Unquote',
	fn: {
		wiki: function() {
			this.encloseLineSelection('','',function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				return str.replace(/(\n|^)(\t|  )/g,"$1");
			});
		}
	}
}

// pre
jsToolBar.prototype.elements.pre = {
	type: 'button',
	title: 'Preformatted',
	fn: {
		wiki: function() {
			this.encloseLineSelection("\n::\n\n","\n",function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				return str.replace(/(\n|^)/g,"$1  ");
			});
		}
	}
}

// unpre
jsToolBar.prototype.elements.unpre = {
	type: 'button',
	title: 'Un-preformatted',
	fn: {
		wiki: function() {
			this.encloseLineSelection('','',function(str) {
				str = str.replace(/\r/g,'');
				if (!str.match(/^\s*::\n\n/))
					return str;
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				str = str.replace(/^::\n/,'');		// Leave one of the newlines in result
				return str.replace(/(\n|^)(\t|  )/g,"$1") + "\n";
			});
		}
	}
}

// spacer
jsToolBar.prototype.elements.space4 = {type: 'space'}

// wiki page
jsToolBar.prototype.elements.link = {
	type: 'button',
	title: 'Wiki link',
	fn: {
		wiki: function() { this.encloseSelection("[[", "]]") }
	}
}
// image
jsToolBar.prototype.elements.img = {
	type: 'button',
	title: 'Image',
	fn: {
		wiki: function() {
			this.encloseSelection('', '', function(str) {
				str = str.replace(/\r/g,'');
				str = str.replace(/^\s+|\s+$/g, '');		// Trim the selection
				altText = str.replace(/^\/?(?:[^\/]*\/)*([^\/]*)$/, '$1');
				return ".. image:: " + str + "\n  :alt: " + altText + "\n";
			});
		}
	}
}
