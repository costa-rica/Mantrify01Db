import { sequelize } from "./_connection";

import { initUser, User } from "./User";
import { initMantra, Mantra } from "./Mantra";
import { initContractUsersMantras, ContractUsersMantras } from "./ContractUsersMantras";
import { initUserMantraListen, UserMantraListen } from "./UserMantraListen";
import { initElevenLabsFiles, ElevenLabsFiles } from "./ElevenLabsFiles";
import { initQueue, Queue } from "./Queue";
import { initSoundFiles, SoundFiles } from "./SoundFiles";

import { applyAssociations } from "./_associations";

export function initModels() {
  initUser();
  initMantra();
  initContractUsersMantras();
  initUserMantraListen();
  initElevenLabsFiles();
  initQueue();
  initSoundFiles();

  applyAssociations();

  return {
    sequelize,
    User,
    Mantra,
    ContractUsersMantras,
    UserMantraListen,
    ElevenLabsFiles,
    Queue,
    SoundFiles,
  };
}

export {
  sequelize,
  User,
  Mantra,
  ContractUsersMantras,
  UserMantraListen,
  ElevenLabsFiles,
  Queue,
  SoundFiles,
};
