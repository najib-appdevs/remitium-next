import toast from 'react-hot-toast';

export const showToast = {
    success: (message) => toast.success(message),

    error: (message) => toast.error(message),

    loading: (message) => toast.loading(message),

    // Loading toast update
    promise: (promise, messages) => {
        return toast.promise(promise, {
            loading: messages.loading || 'Please wait...',
            success: messages.success || 'Success!',
            error: messages.error || 'Something went wrong!',
        });
    },
};