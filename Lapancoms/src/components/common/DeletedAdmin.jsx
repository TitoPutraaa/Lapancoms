import { BsTrash } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

export default function DeletedAdmin(isOpen, onClose, onDelete) {
     if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full">
        <div className="flex">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-100 rounded-full">
            <BsTrash className="text-red-600 w-6 h-6" />
          </div>

          <div className="ml-4 flex-grow">
            <h3 className="text-lg font-semibold font-poppins text-gray-900">Delete Admin</h3>
            <p className="text-sm text-gray-500 mt-1 font-poppins">
              Are you sure you want to remove this admin? You won't be able to undo this.
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center mt-6">
          <input
            id="dont-show"
            type="checkbox"
            className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
          />
          <label htmlFor="dont-show" className="ml-2 text-sm text-gray-500 font-poppins">
            Don't show again
          </label>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            type="button"
            className="bg-white text-gray-700 border font-poppins border-gray-300 font-semibold rounded-lg text-sm py-2 px-4 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            type="button"
            className="bg-red-600 text-white font-semibold rounded-lg text-sm py-2 px-4 hover:bg-red-700 font-poppins"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    );
}