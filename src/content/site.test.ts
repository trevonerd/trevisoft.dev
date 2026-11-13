import { describe, expect, it } from "vitest";
import { createProjectGroups } from "./site";
import source from "./site.json";

const [group] = source.projectGroups;
const [project] = group.projects;

describe("project catalog", () => {
  it("resolves the primary and secondary actions in authored order", () => {
    const result = createProjectGroups(source.projectGroups);
    const [entry] = result[0].projects;

    expect(entry.primaryAction).toEqual(project.actions[0]);
    expect(entry.secondaryActions).toEqual(project.actions.slice(1));
  });

  it("rejects duplicate fragment IDs", () => {
    expect(() => createProjectGroups([{ ...group, projects: [project, project] }])).toThrow(
      /duplicate catalog ID/,
    );
  });

  it("rejects projects without a primary destination or a supported icon", () => {
    expect(() =>
      createProjectGroups([{ ...group, projects: [{ ...project, actions: [] }] }]),
    ).toThrow(/Invalid project links/);
    expect(() =>
      createProjectGroups([{ ...group, projects: [{ ...project, icon: "unknown" }] }]),
    ).toThrow(/Unknown project accent or icon/);
  });
});
