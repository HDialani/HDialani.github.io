import numpy as np
import matplotlib
import matplotlib.pyplot as plt
plt.rcParams['figure.figsize'] = [6, 4]
plt.rcParams['figure.dpi'] = 200

# IM: 400 V, 4-pole, 50 Hz, Y connected
Ls = 4.138e-3
rs = 0.5
rr = 0.35
Lr = 3.183e-3
Lm = 1.114
f  = 50
Vll= 400.0
p  = 2  # 4-pole

Xs = 2*np.pi*f*Ls
Xr = 2*np.pi*f*Lr
Xm = 2*np.pi*f*Lm

Vph = Vll/np.sqrt(3)  # Y connected
f   = 50.0
ns  = 60*f/p          # synchronous speed (rpm)
omegas = 2*np.pi*f    # electrical angular speed

# Calculate in array
n = np.linspace(0, 3000, 100)
s = (ns-n)/ns

Zr   = np.divide(rr,s) + 1j*Xr
Zm   = 1/(1/(1j*Xm)+1/Zr)
Ztot = Zm + rs + 1j*Xs

Is  = Vph/Ztot
Pin = 3*np.real(Vph*np.conj(Is))
Pag = Pin - 3*np.absolute(Is)**2*rs
T   = Pag/(ns/60*2*np.pi)

plt.plot(n, T)
plt.xlabel('n (r/min)')
plt.ylabel('Torque (Nm)')
plt.xlim([0, 3000])
plt.savefig('../Pictures/torque_speed.png', dpi=200, bbox_inches='tight')
plt.show()