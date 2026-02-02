import { User } from "./User";
import { Mantra } from "./Mantra";
import { ContractUsersMantras } from "./ContractUsersMantras";
import { UserMantraListen } from "./UserMantraListen";
import { Queue } from "./Queue";

export function applyAssociations() {
  // User ↔ Mantra (many-to-many through ContractUsersMantras)
  User.belongsToMany(Mantra, {
    through: ContractUsersMantras,
    foreignKey: "userId",
    otherKey: "mantraId",
    as: "mantras",
  });

  Mantra.belongsToMany(User, {
    through: ContractUsersMantras,
    foreignKey: "mantraId",
    otherKey: "userId",
    as: "users",
  });

  // ContractUsersMantras associations
  ContractUsersMantras.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

  ContractUsersMantras.belongsTo(Mantra, {
    foreignKey: "mantraId",
    as: "mantra",
  });

  // UserMantraListen associations
  UserMantraListen.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

  UserMantraListen.belongsTo(Mantra, {
    foreignKey: "mantraId",
    as: "mantra",
  });

  User.hasMany(UserMantraListen, {
    foreignKey: "userId",
    as: "mantraListens",
  });

  Mantra.hasMany(UserMantraListen, {
    foreignKey: "mantraId",
    as: "listens",
  });

  // Queue associations
  Queue.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

  User.hasMany(Queue, {
    foreignKey: "userId",
    as: "queueItems",
  });
}
