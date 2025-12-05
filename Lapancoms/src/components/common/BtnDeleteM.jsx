import { BsTrash } from "react-icons/bs";

export default function BtnDeleteM({
  content,
  view,
  setView,
  handleDelete,
  targetId,
}) {
  if (!view) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
          <div className="flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <BsTrash className="h-6 w-6 text-red-600" />
            </div>

            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Delete <span className="first-letter:uppercase">{content}</span>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Are you sure you want to remove this {content}? You won't be
                able to undo this.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={() => setView(false)}
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={() => handleDelete(targetId)}
              type="button"
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
