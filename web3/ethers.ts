import { ethers } from 'ethers';
import { abi, address as contractAddress } from '../abis/DataType.json'; // Todo: 배포먼저 실행해주세요. (npm run deploy)
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const provider = new ethers.JsonRpcProvider('HTTP://127.0.0.1:7545'); // Todo: 가나슈의 RPC SERVER 주소를 입력합니다.
const privateKey = process.env.PRIVATE_KEY || '';

export const checkNetworkInfo = async () => {
  return await provider.getNetwork();
};
/*
    위의 코드들은 지우지 않습니다.
    
    getSigner와 getContract는 다음의 데이터를 이용하여 구현합니다.

    provider : JSON-RPC API를 통해 블록체인과 통신하는 역할자
    abi : DataType Contract의 ABI 데이터
    contractAddress : DataType Contract의 Address
    privateKey : .env 파일에 설정된 가나슈 계정의 프라이빗 키
*/

export const getSigner = () => {
  // Todo: privateKey를 이용하여 Wallet 인스턴스를 리턴합니다. - new ethers.Wallet(프라이빗 키, provider)
  const wallet = new ethers.Wallet(privateKey, provider);
  return wallet;
};

export const getContract = () => {
  // Todo: DataType Contract 인스턴스를 리턴합니다. - new ethers.Contract(컨트랙트 주소, ABI, signer)
  // 이 후에 구현하는 컨트랙트 호출은 구현한 getContract를 사용합니다.
  const signer = getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return contract;
};

export const positiveNumber = async () => {
  // Todo: positiveNumber 함수는 컨트랙트의 positiveNumber 값을 리턴해야 합니다.

  const result = await getContract().positiveNumber();
  return result;
};

export const negativeNumber = async () => {
  // Todo: negativeNumber 함수는 컨트랙트의 negativeNumber 값을 리턴해야 합니다.
  const result = await getContract().negativeNumber();
  return result;
};

export const isActive = async () => {
  // Todo: isActive 함수는 컨트랙트의 isActive 값을 리턴해야 합니다.
  const result = await getContract().isActive();
  return result;
};

export const wallet = async () => {
  // Todo: wallet 함수는 컨트랙트의 wallet 값을 리턴해야 합니다,
  const result = await getContract().wallet();
  return result;
};

export const recipient = async () => {
  // Todo: recipient 함수는 컨트랙트를 배포한 주소를 리턴해야 합니다.
  const result = await getContract().recipient();
  return result;
};

export const fixedData = async () => {
  // Todo: fixedData 함수는 컨트랙트의 fixedData 값을 리턴해야 합니다.
  const result = await getContract().fixedData();
  return result;
};

export const dynamicData = async () => {
  // Todo: fixedData 함수는 컨트랙트의 dynamicData 값을 리턴해야 합니다.
  const result = await getContract().dynamicData();
  return result;
};

export const currentState = async () => {
  // Todo: currentState 함수는 컨트랙트의 currentState 값을 리턴해야 합니다.
  const result = await getContract().currentState();
  return result;
};

export const getDynamicDataLength = async () => {
  // Todo: getDynamicDataLength 함수는 컨트랙트의 getDynamicDataLength 값을 리턴해야 합니다.
  const result = await getContract().getDynamicDataLength();
  return result;
};

export const getDetails = async () => {
  // Todo: getDetails 함수는 컨트랙트의 getDetails 값을 리턴해야 합니다.
  const result = await getContract().getDetails();
  return result;
};

export const setPositiveNumber = async (_positive: number) => {
  // Todo: setPositiveNumber 함수의 인자를 사용해 컨트랙트의 setPositiveNumber를 실행시켜 리턴해야 합니다.
  const result = await getContract().setPositiveNumber(_positive);
  return result;
};

export const setNegativeNumber = async (_negative: number) => {
  // Todo: setNegativeNumber 함수의 인자를 사용해 컨트랙트의 setNegativeNumber를 실행시켜 리턴해야 합니다.
  const result = await getContract().setNegativeNumber(_negative);
  return result;
};

export const toggleActive = async () => {
  // Todo: 컨트랙트의 toggleActive를 실행시켜 리턴해야 합니다.
  const result = await getContract().toggleActive();
  return result;
};

export const setState = async (_newState: number) => {
  // Todo: setState 함수의 인자를 사용해 컨트랙트의 setState를 실행시켜 리턴해야 합니다.
  const result = await getContract().setState(_newState);
  return result;
};

export const setWallet = async (address: string) => {
  // Todo: setWallet 함수의 인자를 사용해 컨트랙트의 setWallet을 실행시켜 리턴해야 합니다.
  const result = await getContract().setWallet(address);
  return result;
};

export const setFixedData = async (_newFixedData: string) => {
  // Todo: setFixedData 함수의 인자를 사용해 컨트랙트의 setFixedData을 실행시켜 리턴해야 합니다.
  //const number = await getContract().getDynamicDataAsString(_newFixedData);

  const result = await getContract().setFixedData(_newFixedData);

  return result;
};

export const setDynamicData = async (_newDynamicData: string) => {
  // Todo: setDynamicData 함수의 인자를 사용해 컨트랙트의 setDynamicData을 실행시켜 리턴해야 합니다.
  const result = await getContract().setDynamicData(_newDynamicData);
  return result;
};
