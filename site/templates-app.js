angular.module('templates-app', ['about/about.tpl.html', 'faq/faq.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    About Third Eye\n" +
    "  </h1>\n" +
    "  <p class=\"p17\">\n" +
    "Third Eye is developing open tools and technologies for creating and publishing virtual reality experiences.</p><p class=\"p17\">We believe that the future of VR is in the open web: browser-based experiences that users can access with a hyperlink, developed with HTML5, WebGL and JavaScript, and published in the cloud.</p><p class=\"p17\">Our first product, GLAM, is an open-source library for building 3D web applications. GLAM allows developers to quickly create Oculus Rift and Cardboard VR apps using markup, CSS and an easy-to-use JavaScript framework for programming WebGL and Three.js objects and behaviors. For more information on GLAM, visit <a href=“http://www.glamjs.org/“>glamjs</a></p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("faq/faq.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "    Why GLAM?\n" +
    "  </h1>\n" +
    "\n" +
    "    <p class=\"p17\">\n" +
    "\n" +
    "GLAM (GL And Markup) is a declarative language for creating 3D content for browsers. It\n" +
    "\n" +
    "renders with WebGL, using the graphics power of Three.js. GLAM adds behaviors,\n" +
    "\n" +
    "interaction and lots of easy to use features on top of Three.js, but most importantly, it\n" +
    "\n" +
    "defines a markup language and set of stylesheet extensions that make 3D programming\n" +
    "\n" +
    "a snap.\n" +
    "\n" +
    "With GLAM, 3D authoring is like any other web authoring. To make 3D, you create\n" +
    "\n" +
    "elements, set their attributes, add event listeners, and define styles. Just like DOM used\n" +
    "\n" +
    "to make! Content is easy to animate: keyframes and tweens can be defined in a compact\n" +
    "\n" +
    "set of markup tags, or as standard CSS3 animations or transitions. GLAM is also fully\n" +
    "\n" +
    "extensible: to add custom behavior, write JavaScript event handlers. If you want fancy\n" +
    "\n" +
    "shading written in GLSL, simply specify your vertex and fragment shaders as properties\n" +
    "\n" +
    "of the object's style.\n" +
    "\n" +
    "GLAM was created by Tony Parisi, the guy who made the Virtual Reality Markup\n" +
    "\n" +
    "Language (VRML), 20 years before anybody knew they needed it. Since then, Tony's\n" +
    "\n" +
    "learned a few more things about graphics, web browsers have grown up, and the world\n" +
    "\n" +
    "has caught up with his vision. GLAM is still quite young. We're adding features and\n" +
    "\n" +
    "demos at a rapid clip, and we are also looking closely at related technologies such as\n" +
    "\n" +
    "Web Components as they come of age. We'd love your feedback and contributions!\n" +
    "</p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "    Why Now?\n" +
    "  </h1>\n" +
    "\n" +
    "    <p class=\"p17\">\n" +
    "\n" +
    "WebGL is ubiquitous. With the release of iOS8, WebGL now runs on all major desktop\n" +
    "\n" +
    "and mobile browsers, across all devices. That's 3 billion seats ready for connected 3D\n" +
    "\n" +
    "applications, everywhere, powered by JavaScript. This is an incredible opportunity to\n" +
    "\n" +
    "change the face of computing.\n" +
    "\n" +
    "The last few years have seen an explosion of interest in building WebGL. But there is a\n" +
    "\n" +
    "huge skill gap. 3D is inherently hard, yes; we have that extra dimension to worry about,\n" +
    "\n" +
    "plus cameras, shaders, skinned animations, etc... But there is no reason to make 3D\n" +
    "\n" +
    "harder than it has to be. For the simple 3D stuff, there should be a simple way to do it,\n" +
    "\n" +
    "with an approach that is familiar to the millions of web developers ready to try something\n" +
    "\n" +
    "new. Until GLAM, this didn't exist. GLAM is here to make your 3D job easier, so you can\n" +
    "\n" +
    "focus on the fun part: building a killer 3D web app.\n" +
    "\n" +
    "</p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "    How Do I Use GLAM?\n" +
    "  </h1>\n" +
    "\n" +
    "    <p class=\"p17\">\n" +
    "\n" +
    "\n" +
    "To add GLAM to your application, simply include either the debug or minified version of\n" +
    "\n" +
    "the library:\n" +
    "\n" +
    "&lt;script src=\"pathtoglam/glam.js\"&gt; &lt;/script&gt;\n" +
    "\n" +
    "OR\n" +
    "\n" +
    "&lt;script src=\"pathtoglamlib/glam.min.js\"&gt; &lt;/script&gt;\n" +
    "\n" +
    "... and then you can start adding 3D tags to your page. To see what those tags look like,\n" +
    "\n" +
    "read the Getting Started Tutorial (link)\n" +
    "\n" +
    "</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "    How Do I Author GLAM?\n" +
    "  </h1>\n" +
    "\n" +
    "    <p class=\"p17\">\n" +
    "\n" +
    "Right now, authoring GLAM requires a text editor. Someday, maybe, we'll build an\n" +
    "\n" +
    "interactive tool for authoring, or at least a syntax assisted in browser editor a la JSFiddle.\n" +
    "\n" +
    "To test, you will most likely need a web server ... so that you can see your texture maps\n" +
    "\n" +
    "and shaders. Launching HTML files from your Finder/Explorer usually results in the\n" +
    "\n" +
    "browser yakking about cross­origin restrictions.\n" +
    "\n" +
    "How Can I Participate?\n" +
    "\n" +
    "GLAM is new. We're just getting started, and we need your help! We are looking for help\n" +
    "\n" +
    "with code, content and documentation. Check out the Github repo and examples (links\n" +
    "\n" +
    "here) and join the GLAM revolution!\n" +
    "\n" +
    "CAN YOU DIG IT?\n" +
    "\n" +
    "</p>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "<div class=\"bxSizing\">\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    About Third Eye\n" +
    "  </h1>\n" +
    "  <p class=\"p17\">\n" +
    "Third Eye is developing open tools and technologies for creating and publishing virtual reality experiences.</p><p class=\"p17\">We believe that the future of VR is in the open web: browser-based experiences that users can access with a hyperlink, developed with HTML5, WebGL and JavaScript, and published in the cloud.</p><p class=\"p17\">Our first product, GLAM, is an open-source library for building 3D web applications. GLAM allows developers to quickly create Oculus Rift and Cardboard VR apps using markup, CSS and an easy-to-use JavaScript framework for programming WebGL and Three.js objects and behaviors. For more information on GLAM, visit <a href=\"http://www.glamjs.org/\">glamjs</a></p>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
