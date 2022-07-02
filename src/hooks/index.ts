// ##############################
// *
// * common hooks
// *
// ##############################

export default function useHooks() {
  // ----- 背景色作成 -----
  const bgColorCreator = (e: number): string => {
    // 0:デフォルト、1:本社、2:支社、3:食堂、4:外勤、5:その他
    const list: string[] = ['bg-slate-100', 'bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-violet-100', 'bg-zinc-100']
    return list[e]
  }

  return {
    bgColorCreator,
  }
}
