export type PublicationStatus = "published" | "under-review" | "submitted" | "in-preparation";

export type Publication = {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  status: PublicationStatus;
  doi?: string;
  category: "journal" | "book-chapter" | "manuscript";
  relatedProjectIds?: string[];
};
