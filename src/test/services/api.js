import axios from 'axios';
import { helper } from '../helpers/common';

function compareRank( a, b ) {
  if ( a.rank < b.rank ){
    return -1;
  }
  if ( a.rank > b.rank ){
    return 1;
  }
  return 0;
}

function compareGroup( a, b ) {
  if ( a.group_id < b.group_id ) {
    return -1;
  }
  if ( a.group_id > b.group_id ) {
    return 1;
  }
  return 0;
}

let perChunk = 4; // items per chunk    

const getDataFootball = async () => {
  const url = `https://gw.vnexpress.net/football/standing?league_id=403`;
  const response = await axios.get(url);
  const data = await response.status === 200 ? response.data : {};
  if(!helper.isEmptyObject(data)) {
    const resultArray = data['data']['403']['data'];
    resultArray.sort(compareGroup);

    let resultFootball = resultArray.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/perChunk)
    
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
    
      resultArray[chunkIndex].push(item)
    
      return resultArray
    }, []);

    return resultFootball;
  }
  return {};
}

export const api = {
  getDataFootball,
  compareRank
}