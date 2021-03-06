﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/demos/storage/appdata/appdata.html", {
        ready: function (element, options) {
            //restore temp file contents
            appdata.temporaryFolder.getFileAsync("storagedemo.txt")
                .then(function (file) { return Windows.Storage.FileIO.readTextAsync(file); })
                .then(function (contents) { q(".storage .appdata section[role=main] input:nth-of-type(1)").value = contents; });

            q(".storage .appdata section[role=main] button:nth-of-type(1)").onclick = function (e) {
                appdata.temporaryFolder.createFileAsync("storagedemo.txt", Windows.Storage.CreationCollisionOption.replaceExisting)
                    .then(function (file) { Windows.Storage.FileIO.writeTextAsync(file, q(".storage .appdata section[role=main] input:nth-of-type(1)").value); });
            };

            //restore local file contents
            appdata.localFolder.getFileAsync("storagedemo.txt")
                .then(function (file) { Windows.Storage.FileIO.readTextAsync(file); })
                .then(function (contents) { q(".storage .appdata section[role=main] input:nth-of-type(2)").value = contents; });

            //save to local file
            q(".storage .appdata section[role=main] button:nth-of-type(2)").onclick = function (e) {
                appdata.localFolder.createFileAsync("storagedemo.txt", Windows.Storage.CreationCollisionOption.replaceExisting)
                    .then(function (file) { Windows.Storage.FileIO.writeTextAsync(file, q(".storage .appdata section[role=main] input:nth-of-type(2)").value); });
            };

            //restore roaming file contents
            appdata.roamingFolder.getFileAsync("storagedemo.txt")
                .then(function (file) { return Windows.Storage.FileIO.readTextAsync(file); })
                .then(function (contents) { q(".storage .appdata section[role=main] input:nth-of-type(3)").value = contents; });

            //save to roaming file
            q(".storage .appdata section[role=main] button:nth-of-type(3)").onclick = function (e) {
                appdata.roamingFolder.createFileAsync("storagedemo.txt", Windows.Storage.CreationCollisionOption.replaceExisting)
                    .then(function (file) { Windows.Storage.FileIO.writeTextAsync(file, q(".storage .appdata section[role=main] input:nth-of-type(3)").value); });
            };
        }
    });
})();
