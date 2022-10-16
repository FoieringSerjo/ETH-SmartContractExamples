import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE42DeE2640B2D0511Fc9c5d563F01370649915D1'
);

export default instance;
