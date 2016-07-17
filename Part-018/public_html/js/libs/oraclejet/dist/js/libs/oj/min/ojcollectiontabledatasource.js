/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel"],function(a,f){a.yc=function(b,d){this.data={};if(!(b instanceof a.j))throw Error(a.T.fc._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.T.fc._ERR_DATA_INVALID_TYPE_DETAIL);a.yc.r.constructor.call(this,b,d);this.pc=b;this.w$();this.Init();if(null!=d&&("enabled"==d.startFetch||null==d.startFetch)||null==d)this.by=!0};o_("CollectionTableDataSource",a.yc,a);a.b.ga(a.yc,a.T,"oj.CollectionTableDataSource");a.yc.prototype.Init=function(){a.yc.r.Init.call(this)};
a.b.g("CollectionTableDataSource.prototype.Init",{Init:a.yc.prototype.Init});a.yc.prototype.at=function(b,d){d=d||{};d.deferred=!0;var c=this.pc.at(b,d),e=this;e.hx=!0;var f;return new Promise(function(d,k){null!=c?c.then(function(a){e.hx=!1;f={data:a.attributes,index:b,key:a.id};d(f)},function(b){e.hx=!1;a.T.r.handleEvent.call(e,a.T.D.ERROR,b);k(b)}):d(null)})};a.b.g("CollectionTableDataSource.prototype.at",{at:a.yc.prototype.at});a.yc.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||
this.by?this.Ie(a):Promise.resolve()};a.b.g("CollectionTableDataSource.prototype.fetch",{fetch:a.yc.prototype.fetch});a.yc.prototype.get=function(b,d){d=d||{};d.deferred=!0;var c=this.pc.get(b,d),e=this,f;return new Promise(function(b,d){null!=c?c.then(function(a){f={data:a.attributes,index:a.index,key:a.id};b(f)},function(b){a.T.r.handleEvent.call(e,a.T.D.ERROR,b);d(b)}):b(null)})};a.b.g("CollectionTableDataSource.prototype.get",{get:a.yc.prototype.get});a.yc.prototype.sort=function(a){if(null==
a)return Promise.resolve();var d=this;return new Promise(function(c){d.dla(a);d.pc.sort(null);c({header:a.key,direction:a.direction})})};a.b.g("CollectionTableDataSource.prototype.sort",{sort:a.yc.prototype.sort});a.yc.prototype.totalSize=function(){var a=0<=this.pc.totalResults?this.pc.totalResults:-1;if(-1<a){var d=this.pc.size();return d>a?d:a}if(0<this.DI)a=this.DI;else if("atLeast"==this.totalSizeConfidence())return this.pc.size();return a};a.b.g("CollectionTableDataSource.prototype.totalSize",
{totalSize:a.yc.prototype.totalSize});a.yc.prototype.totalSizeConfidence=function(){return 0<=this.pc.totalResults?"actual":this.pc.hasMore?"atLeast":"unknown"};a.b.g("CollectionTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.yc.prototype.totalSizeConfidence});a.yc.prototype.w$=function(){var b=this;this.pc.on(a.Y.D.SYNC,function(d){if(d instanceof a.j&&!b.hx&&!b.uY){var c=d.offset,e=d.lastFetchCount;0<e?(b.$=c,b.Ja=e,b.hx=!0,d.Yr(c,c+e).then(function(a){b.hx=!1;var d=[],e=[],
f;for(f=0;f<a.length;f++)null!=a[f]&&(d.push(a[f].attributes),e.push(a[f].id));b.nj.call(b,{silent:!1},{data:d,keys:e,startIndex:c},null)})):(d=b.wt(),b.nj.call(b,{silent:!1},d,null))}});this.pc.on(a.Y.D.ALLADDED,function(d,c){var e=[],f=[],h=[],k;for(k=0;k<c.length;k++)e.push(c[k].attributes),f.push(c[k].id),h.push(c[k].index);a.T.r.handleEvent.call(b,a.T.D.ADD,{data:e,keys:f,indexes:h})});this.pc.on(a.Y.D.ALLREMOVED,function(d,c){var e=[],f=[],h=[],k;for(k=0;k<c.length;k++)e.push(c[k].attributes),
f.push(c[k].id),h.push(c[k].index);a.T.r.handleEvent.call(b,a.T.D.REMOVE,{data:e,keys:f,indexes:h})});this.pc.on(a.Y.D.RESET,function(d){a.T.r.handleEvent.call(b,a.T.D.RESET,d)});this.pc.on(a.Y.D.SORT,function(d,c){null!=c&&c.add||a.T.r.handleEvent.call(b,a.T.D.SORT,d)});this.pc.on(a.Y.D.CHANGE,function(d){a.T.r.handleEvent.call(b,a.T.D.CHANGE,{data:[d.attributes],keys:[d.id],indexes:[d.index]})});this.pc.on(a.Y.D.DESTROY,function(d){a.T.r.handleEvent.call(b,a.T.D.DESTROY,d)});this.pc.on(a.Y.D.REFRESH,
function(d){a.T.r.handleEvent.call(b,a.T.D.REFRESH,d)});this.pc.on(a.Y.D.ERROR,function(d,c,e){a.T.r.handleEvent.call(b,a.T.D.ERROR,d,c,e)})};a.yc.prototype.Ie=function(a){this.ay(a);a=a||{};var d=this;this.EY=0<a.pageSize?!0:!1;this.$=null==a.startIndex?this.$:a.startIndex;this.Ja=0<a.pageSize?a.pageSize:-1;a.pageSize=this.Ja;a.startIndex=this.$;a.refresh=!0;return new Promise(function(c,e){var f=d.Ja;d.EY||(f=25);d.pc.nz(d.$,f).then(function(e){var f;if(d.EY){f=[];var g=[],m;for(m=0;m<e.models.length;m++)f[m]=
e.models[m].attributes,g[m]=e.models[m].id;f={data:f,keys:g,startIndex:d.$};e.models.length<d.Ja?0>d.totalSize()&&(d.DI=d.$+e.models.length):d.DI=null}else f=d.wt();d.nj.call(d,a,f,null);c(f)},function(c){d.nj.call(d,a,null,c);e(c)})})};a.yc.prototype.ay=function(b){this.uY=!0;b.silent||a.T.r.handleEvent.call(this,a.T.D.REQUEST,{startIndex:b.startIndex})};a.yc.prototype.nj=function(b,d,c){this.uY=!1;null!=c?a.T.r.handleEvent.call(this,a.T.D.ERROR,c):b.silent||a.T.r.handleEvent.call(this,a.T.D.SYNC,
d)};a.yc.prototype.dla=function(a){if(null==a)this.pc.comparator=null;else{var d=a.key;a=a.direction;var c=null;this.pc.Ya()?(this.pc.comparator=d,this.pc.sortDirection="ascending"===a?1:-1):("ascending"==a?c=function(a){return f.isFunction(a.get)?a.get(d):a[d]()}:"descending"==a&&(c=function(a,b){var c,k;f.isFunction(a.get)?(c=a.get(d),k=b.get(d)):(c=a[d](),k=b[d]());return c===k?0:c>k?-1:1}),this.pc.comparator=c)}};a.yc.prototype.wt=function(){var a=this.pc.size()-1,d=[],c=[],e;for(e=0;e<=a;e++)d[e]=
this.pc.at(e).attributes,c[e]=this.pc.at(e).id;return{data:d,keys:c,startIndex:this.$}};a.yc.prototype.getCapability=function(){return null};a.b.g("CollectionTableDataSource.prototype.getCapability",{getCapability:a.yc.prototype.getCapability})});