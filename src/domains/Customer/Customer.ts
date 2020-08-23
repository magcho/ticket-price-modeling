import { Age } from "./Age"
import { Certificate, CertificateType } from "./Certificate"

export class Customer {
  private _age: Age
  private _certificate: Certificate[]
  constructor(age: number, certificate: Certificate[] = []) {
    this._age = new Age(age)
    this._certificate = certificate
  }

  public age(): Age {
    return this._age
  }
  public certificate(): Certificate[] {
    return this._certificate
  }
  public hasCertificate(checkCertificateType: CertificateType): boolean {
    return this._certificate.some(
      item => item.certificate() === checkCertificateType
    )
  }
}
