export default function getDeviceType(): string {
  const userAgent = navigator.userAgent

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    ? 'Mobile'
    : 'Desktop'
}
