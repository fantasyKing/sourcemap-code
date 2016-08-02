import sourceMap from 'source-map';
import fs from 'fs';

function define() {
  return new Error('请输入.map文件的path');
}


class mapdecoder {
  constructor(mappath = define()) {
    console.log(mappath.endsWith('.map'));
    console.log(fs.existsSync(mappath));
    if (mappath.endsWith('.map') && fs.existsSync(mappath)) {
      this.PATH = mappath;
    }
  }
  /**
   * @param  {number} line 行数
   * @param  {number} column 列数
   */
  decodemapping = async (line, column) => {
    const sourcemap = await this.decodeFile();
    const consumer = new sourceMap.SourceMapConsumer(sourcemap);
    return consumer.originalPositionFor({ line, column });
  }

  decodeFile = async () => {
    const mapfile = fs.readFileSync(this.PATH, 'utf8');
    const mapconfig = JSON.parse(mapfile);
    return mapconfig;
  }
}

export default mapdecoder;
