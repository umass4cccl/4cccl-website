import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonateComponent } from './donate.component';

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Check that the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Check that the Venmo username is set correctly
  it('should have the correct Venmo username', () => {
    expect(component.venmoUsername).toBe('@Georges-Chebly'); // Replace with your actual Venmo username
  });

  // Check that the Venmo logo path is set correctly
  it('should have the correct Venmo logo path', () => {
    expect(component.venmoLogoPath).toBe('assets/venmo-logo.png');
  });

  // Check that the Venmo QR code path is set correctly
  it('should have the correct Venmo QR code path', () => {
    expect(component.venmoQRCodePath).toBe('assets/venmo-qr.png');
  });

  // Check that the HTML renders the Venmo username correctly
  it('should render the Venmo username in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('@Georges-Chebly'); // Replace with your actual Venmo username
  });

  // Check that the HTML renders the Venmo logo
  it('should render the Venmo logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoImg = compiled.querySelector('img.venmo-logo') as HTMLImageElement;
    expect(logoImg.src).toContain('assets/venmo-logo.png');
  });

  // Check that the HTML renders the Venmo QR code
  it('should render the Venmo QR code', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const qrImg = compiled.querySelector('img.venmo-qr') as HTMLImageElement;
    expect(qrImg.src).toContain('assets/venmo-qr.png');
  });
});
