function testBlob() {
    let config: qq.BasicOptions = {
        blobs: {
            defaultName: "hi.png"
        }
    };

    let uploader = new qq.FineUploaderBasic(config);
}
