import GithubSlugger from "github-slugger";
import type { Parent, Root, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

const slugger = new GithubSlugger();

export function mdTransform(options: {}) {
    return function (tree: Root) {
        visit(tree, (node, index, parent) => {
            switch (node.type) {
                case "code":
                    return wrapNode(
                        node,
                        {
                            start: `<div data-code-wrapper=${JSON.stringify(node.lang)}>`,
                            end: "</div>",
                        },
                        parent,
                        index,
                    );
                case "heading":
                    return wrapNode(
                        node,
                        {
                            start: `<a href=${JSON.stringify("#" + slugger.slug(toString(node)))} data-heading-wrapper>`,
                            end: "</a>",
                        },
                        parent,
                        index,
                    );
                case "table":
                    return wrapNode(
                        node,
                        { start: "<div data-table-wrapper>", end: "</div>" },
                        parent,
                        index,
                    );
            }
        });
    };
}

function isNonNullish<T>(item: T): item is Exclude<T, null | undefined> {
    return item != null;
}

function wrapNode<T extends RootContent>(
    node: T,
    html: { start: string; end: string },
    parent: Parent | undefined,
    index: number | undefined,
) {
    if (isNonNullish(parent) && isNonNullish(index)) {
        parent.children = [
            ...parent.children.slice(0, index),
            {
                type: "html",
                value: html.start,
            },
            node,
            { type: "html", value: html.end },
            ...parent.children.slice(index + 1),
        ];

        return index + 2;
    } else {
        console.warn(`\`${node.type}\` found without any parent and/or index!`);
    }
}
