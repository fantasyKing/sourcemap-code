import test from 'ava';
import path from 'path';
import util from 'util';

import mapdecoder from './../src/sourcemap';

const resolvepath = path.resolve('./../build/index.js.map');

test('sourcemap', async t => {
  const source_map = new mapdecoder(resolvepath);
  const obj = await source_map.decodemapping(434, 1);
  console.log(util.inspect(obj, { depth: null }));
  t.truthy(obj, 'message');
});
