const btns = Array.from(document.querySelectorAll('button'))
const toastLiveExample = document.getElementById('liveToast')
const toast = new bootstrap.bundle.min.Toast(toastLiveExample)

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.dataset.content);
        navigator.clipboard.writeText(btn.dataset.content);
        toast.show()
    })
})