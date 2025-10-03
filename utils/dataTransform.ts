import {SkillTransaction, Progress, User, XPTransaction} from '../models/interfaces';

export const formatSkillData = (transactions: SkillTransaction[] = []) =>
  transactions.reduce((acc, skill) => {
    const key = skill.type.replace("skill_", "").replace("_", "");
    const existing = acc.find((s) => s.skill === key);

    if (existing) {
      existing.level += skill.amount;
    } else {
      acc.push({ skill: key, level: skill.amount });
    }
    return acc;
  }, [] as { skill: string; level: number }[]);

  export const formatXPData = (transactions: XPTransaction[] = []) =>
  transactions.map((tx) => ({
    project: tx.object.name,
    xp: tx.amount,
  }));

export const formatProgressData = (progress: Progress[] = []) =>
  progress
    .filter((p) => p.grade !== null && p.grade !== 0)
    .map((p) => ({
      name: p.object.name,
      grade: p.grade!,
      type: p.object.type,
    }));