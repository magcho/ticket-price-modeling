export type CertificateType =
  | "Identification" // 身分証
  | "StudentIdentification" //学生証
  | "StudentHandbook" //生徒証
  | "DisabilityHandbook" //障がい者手帳

export class Certificate {
  private _type: CertificateType
  constructor(certificateType: CertificateType) {
    this._type = certificateType
  }
  public certificate() {
    return this._type
  }
}
