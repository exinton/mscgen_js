/* global define */

define([], function() {
    "use strict";

    return {
        toRasterURI: function (pDocument, pSVGSource, pType, pCallback){
            var lImg = pDocument.createElement('img');

            lImg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(pSVGSource);
            lImg.addEventListener('load', function(pEvent){
                var lCanvas        = pDocument.createElement('canvas');
                var lCanvasContext = lCanvas.getContext('2d');
                var lImg           = pEvent.target;

                lCanvas.width  = lImg.width;
                lCanvas.height = lImg.height;
                lCanvasContext.drawImage(lImg, 0, 0);

                pCallback(lCanvas.toDataURL(pType, 0.8));
            });
        }
    };
});
/*
 This file is part of mscgen_js.

 mscgen_js is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 mscgen_js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with mscgen_js.  If not, see <http://www.gnu.org/licenses/>.
 */