import { DataTypes, InferAttributes, Model, ModelAttributes, ModelStatic, Optional } from "sequelize";
import sequelize from "./sequelize";

export function initModel<
T extends ModelStatic<M>,
M extends Model,
>(
    model: T,
    attributes: ModelAttributes<M, Optional<InferAttributes<M>, never>>,
    tableName: string
) {
    model.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        deleted_at: {
            type: DataTypes.DATE,
            defaultValue: null,
            allowNull: true,
        },
        ...attributes,
    }, {
        sequelize,
        tableName,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true,
    });
}
