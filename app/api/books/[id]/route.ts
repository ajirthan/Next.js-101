import books from "@/app/api/db";

export async function PUT(
  request: Request,
  context: { params: { id: number } },
) {
  const id = +context.params.id;
  const book = await request.json();

  const index = books.findIndex(
    (b: { id: number; name: string }) => b.id === id,
  );
  books[index] = book;
  return Response.json({ books });
}

export async function DELETE(
  request: Request,
  context: { params: { id: number } },
) {
  const id = +context.params.id;

  const index = books.findIndex(
    (b: { id: number; name: string }) => b.id === id,
  );
  books.splice(index, 1);
  return Response.json({ books });
}