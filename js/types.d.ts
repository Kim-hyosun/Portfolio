// CDN으로 로드되는 @emailjs/browser SDK가 window에 전역으로 노출하는 객체.
// 실제 메서드 시그니처는 EmailJS docs 기준.
declare const emailjs: {
  init(publicKey: string): void;
  send(
    serviceId: string,
    templateId: string,
    params: Record<string, string>,
  ): Promise<{ status: number; text: string }>;
};
