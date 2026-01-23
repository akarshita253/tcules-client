type RichTextTextNode = {
  type: "text";
  text: string;
};

type RichTextListItemNode = {
  type: "list-item";
  children: RichTextTextNode[];
};

type RichTextListNode = {
  type: "list";
  format: "ordered" | "unordered";
  children: RichTextListItemNode[];
};

type RichTextHeadingNode = {
  type: "heading";
  level: number;
  children: RichTextTextNode[];
};

type RichTextParagraphNode = {
  type: "paragraph";
  children: RichTextTextNode[];
};

type RichTextNode =
  | RichTextHeadingNode
  | RichTextParagraphNode
  | RichTextListNode;


type FourthSectionPoint = {
  id: string;
  listText: string;
};

type FourthSectionCard = {
  id: string;
  heading: string;
  points: FourthSectionPoint[];
};

type ParsedFourthSection = {
  heading: string;
  description: string;
  cards: FourthSectionCard[];
};

export type FifthSectionParsed = {
  heading: string;
  description: string;
  cards: {
    id: string;
    heading: string;
    description: string;
  }[];
};


export type ThirdSectionParsed = {
  headingTop: string;
  descriptionTop: string;
  pspCards: {
    heading: string;
    points: {
      id: string;
      listText: string;
    }[];
  };
};

export function parseThirdSection(
  nodes: RichTextNode[]
): ThirdSectionParsed {
  let headingTop = "";
  let descriptionTop = "";

  const pspCards = {
    heading: "",
    points: [] as { id: string; listText: string }[],
  };

  nodes.forEach((node, index) => {
    if (node.type === "heading" && node.level === 2 && !headingTop) {
      headingTop = node.children[0]?.text ?? "";
      return;
    }

    if (node.type === "paragraph" && !descriptionTop) {
      descriptionTop = node.children[0]?.text ?? "";
      return;
    }

    if (node.type === "heading" && node.level === 3) {
      pspCards.heading = node.children[0]?.text ?? "";
      return;
    }

    if (node.type === "list") {
      pspCards.points = node.children.map((item, i) => ({
        id: `${index}-${i}`,
        listText: item.children[0]?.text ?? "",
      }));
    }
  });

  return {
    headingTop,
    descriptionTop,
    pspCards,
  };
}


export function parseFourthSection(
  nodes: RichTextNode[]
): ParsedFourthSection {
  let heading = "";
  let description = "";
  const cards: FourthSectionCard[] = [];

  let currentCard: FourthSectionCard | null = null;

  nodes.forEach((node, index) => {
    // SECTION HEADING (first H2)
    if (node.type === "heading" && node.level === 2 && !heading) {
      heading = node.children[0]?.text ?? "";
      return;
    }

    // DESCRIPTION (first paragraph)
    if (node.type === "paragraph" && !description) {
      description = node.children[0]?.text ?? "";
      return;
    }

    // CARD HEADING (H2 / H3 after intro)
    if (node.type === "heading" && node.level >= 2) {
      currentCard = {
        id: String(index),
        heading: node.children[0]?.text ?? "",
        points: [],
      };
      cards.push(currentCard);
      return;
    }

    // CARD POINTS
    if (node.type === "list" && currentCard) {
      currentCard.points = node.children.map((item, i) => ({
        id: `${index}-${i}`,
        listText: item.children[0]?.text ?? "",
      }));
    }
  });

  return {
    heading,
    description,
    cards,
  };
}

export function parseFifthSection(
  nodes: RichTextNode[]
): FifthSectionParsed {
  let heading = "";
  let description = "";

  const cards: FifthSectionParsed["cards"] = [];
  let currentCard: FifthSectionParsed["cards"][number] | null = null;

  nodes.forEach((node, index) => {
    // SECTION HEADING (H2)
    if (node.type === "heading" && node.level === 2 && !heading) {
      heading = node.children[0]?.text ?? "";
      return;
    }

    // SECTION DESCRIPTION
    if (node.type === "paragraph" && !description) {
      description = node.children[0]?.text ?? "";
      return;
    }

    // CARD HEADING (H3)
    if (node.type === "heading" && node.level === 3) {
      currentCard = {
        id: String(index),
        heading: node.children[0]?.text ?? "",
        description: "",
      };
      cards.push(currentCard);
      return;
    }

    // CARD DESCRIPTION (paragraph after H3)
    if (node.type === "paragraph" && currentCard) {
      currentCard.description = node.children[0]?.text ?? "";
    }
  });

  return {
    heading,
    description,
    cards,
  };
}
