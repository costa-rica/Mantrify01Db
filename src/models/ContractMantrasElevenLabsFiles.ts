import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  ForeignKey,
} from "sequelize";
import { sequelize } from "./_connection";
import { Mantra } from "./Mantra";
import { ElevenLabsFiles } from "./ElevenLabsFiles";

export class ContractMantrasElevenLabsFiles extends Model<
  InferAttributes<ContractMantrasElevenLabsFiles>,
  InferCreationAttributes<ContractMantrasElevenLabsFiles>
> {
  declare id: CreationOptional<number>;
  declare mantraId: ForeignKey<Mantra["id"]>;
  declare elevenLabsFilesId: ForeignKey<ElevenLabsFiles["id"]>;

  // Timestamps
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export function initContractMantrasElevenLabsFiles() {
  ContractMantrasElevenLabsFiles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      mantraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "mantras",
          key: "id",
        },
      },
      elevenLabsFilesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "elevenlabs_files",
          key: "id",
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "contract_mantras_elevenlabs_files",
      timestamps: true,
    }
  );
  return ContractMantrasElevenLabsFiles;
}
