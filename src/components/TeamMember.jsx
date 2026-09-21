function TeamMember({ member, index }) {
  return (
    <article className="group grid min-h-72 grid-rows-[auto_1fr_auto] border-r border-ink p-6 last:border-r-0 md:p-8">
      <span className="text-xs font-bold uppercase tracking-[0.15em]">0{index + 1} / FutureCall</span>
      <div className="grid place-items-center">
        <span className="grid size-24 place-items-center bg-ink text-3xl font-bold text-paper transition-transform duration-300 group-hover:-rotate-6 group-hover:bg-violet">
          {member.initials}
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.04em]">{member.name}</h2>
        <p className="mt-1 text-sm">RM {member.rm}</p>
        <p className="mt-3 text-sm font-semibold uppercase">{member.role}</p>
      </div>
    </article>
  );
}

export default TeamMember;
