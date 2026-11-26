import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const timeLogSchema = new Schema(
  {
    // 打 API 當下的時間
    time: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export type TimeLog = InferSchemaType<typeof timeLogSchema>;

// 避免 hot reload 時重複註冊 model 造成 OverwriteModelError
export const TimeLogModel: Model<TimeLog> =
  (models.TimeLog as Model<TimeLog>) || model<TimeLog>("TimeLog", timeLogSchema);
