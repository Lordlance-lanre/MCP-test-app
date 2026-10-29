import storageMiddleware from './storageMiddleware';

const STORAGE_KEY = 'lendsqr_users_data';
const MOCK_API_URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

const SAMPLE_ORGS = ['Lendsqr', 'Irorun', 'Kudimata', 'Lendstar', 'QuickCheck', 'Advans'];
const SAMPLE_STATUSES = ['Active', 'Inactive', 'Pending', 'Blacklisted'];

const FIRST_NAMES = ['Grace', 'Adedoyin', 'Tosin', 'Debby', 'Babatunde', 'Chioma', 'Emmanuel', 'Folashade', 'Kolawole', 'Oluwaseun', 'Chidiebere', 'Amina', 'Damilola', 'Ibrahim', 'Ngozi', 'Fatima', 'Kehinde', 'Olamide'];
const LAST_NAMES = ['Effiom', 'Adeleke', 'Dokunmu', 'Ogana', 'Fashola', 'Okeke', 'Eze', 'Johnson', 'Balogun', 'Nwosu', 'Bakare', 'Aliyu', 'Ogunleye', 'Bello', 'Okafor', 'Lawal', 'Ajayi', 'Suleiman'];

// Generate 100 high-quality realistic users for the assessment
export function generateDefaultUsers() {
  const users = [];
  for (let i = 1; i <= 100; i++) {
    const fName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lName = LAST_NAMES[(i * 3) % LAST_NAMES.length];
    const org = SAMPLE_ORGS[i % SAMPLE_ORGS.length];
    const status = SAMPLE_STATUSES[i % SAMPLE_STATUSES.length];
    const id = `LSQR-${1000 + i}`;
    const email = `${fName.toLowerCase()}.${lName.toLowerCase()}${i}@${org.toLowerCase()}.com`;
    const phone = `080${String(10000000 + (i * 73918) % 90000000)}`;
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i % 12];
    const day = (i % 28) + 1;
    const year = 2020 + (i % 4);
    const hour = (i % 12) + 1;
    const minute = (i * 7) % 60;
    const ampm = i % 2 === 0 ? 'AM' : 'PM';
    const dateJoined = `${month} ${day < 10 ? '0' + day : day}, ${year} ${hour}:${minute < 10 ? '0' + minute : minute} ${ampm}`;

    const balanceAmount = (150000 + (i * 12500) % 850000).toLocaleString();
    const monthly1 = (120000 + (i * 10000) % 300000).toLocaleString();
    const monthly2 = (350000 + (i * 15000) % 500000).toLocaleString();
    const loanRepayment = (25000 + (i * 3000) % 65000).toLocaleString();

    users.push({
      id,
      orgName: org,
      userName: `${fName} ${lName}`,
      email,
      phoneNumber: phone,
      createdAt: dateJoined,
      status,
      bvn: `222${String(10000000 + (i * 4921) % 90000000)}`,
      gender: i % 2 === 0 ? 'Female' : 'Male',
      maritalStatus: i % 3 === 0 ? 'Married' : 'Single',
      children: i % 3 === 0 ? `${(i % 3) + 1}` : 'None',
      residenceType: i % 2 === 0 ? "Parent's Apartment" : 'Rented Apartment',
      education: i % 4 === 0 ? 'M.Sc' : 'B.Sc',
      employmentStatus: i % 5 === 0 ? 'Self-Employed' : 'Employed',
      sector: ['FinTech', 'Banking', 'E-Commerce', 'Education', 'Healthcare'][i % 5],
      duration: `${(i % 5) + 1} years`,
      officeEmail: `office.${fName.toLowerCase()}@${org.toLowerCase()}.com`,
      monthlyIncome: [`₦${monthly1}`, `₦${monthly2}`],
      loanRepayment: `₦${loanRepayment}`,
      twitter: `@${fName.toLowerCase()}_${lName.toLowerCase()}`,
      facebook: `${fName} ${lName}`,
      instagram: `@${fName.toLowerCase()}${lName.toLowerCase()}`,
      guarantor: {
        name: `${FIRST_NAMES[(i + 4) % FIRST_NAMES.length]} ${LAST_NAMES[(i + 2) % LAST_NAMES.length]}`,
        phoneNumber: `070${String(20000000 + (i * 3189) % 80000000)}`,
        email: `guarantor${i}@gmail.com`,
        relationship: ['Sister', 'Brother', 'Colleague', 'Friend', 'Mother', 'Father'][i % 6],
      },
      accountBalance: `₦${balanceAmount}.00`,
      accountNumber: `99${String(10000000 + (i * 8271) % 90000000)}`,
      bankName: ['Providus Bank', 'Access Bank', 'Zenith Bank', 'GTBank', 'Kuda Bank'][i % 5],
      tier: (i % 3) + 1,
    });
  }
  return users;
}

// Get all users with fallback
export async function getUsers() {
  const cached = storageMiddleware.getItem(STORAGE_KEY);
  if (cached && Array.isArray(cached) && cached.length > 0) {
    return cached;
  }

  try {
    const response = await fetch(MOCK_API_URL, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const apiUsers = await response.json();
      if (Array.isArray(apiUsers) && apiUsers.length > 0) {
        // Normalize apiUsers to our standard format
        const normalized = apiUsers.map((u, idx) => {
          const org = u.orgName || SAMPLE_ORGS[idx % SAMPLE_ORGS.length];
          const status = u.status || SAMPLE_STATUSES[idx % SAMPLE_STATUSES.length];
          return {
            id: u.id || `LSQR-${1000 + idx}`,
            orgName: org,
            userName: u.userName || (u.profile ? `${u.profile.firstName} ${u.profile.lastName}` : `User ${idx}`),
            email: u.email || `${u.userName || 'user'}@${org.toLowerCase()}.com`,
            phoneNumber: u.phoneNumber || u.profile?.phoneNumber || '08070607809',
            createdAt: u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'May 15, 2020 10:00 AM',
            status,
            bvn: u.profile?.bvn || '22270607809',
            gender: u.profile?.gender || (idx % 2 === 0 ? 'Female' : 'Male'),
            maritalStatus: idx % 3 === 0 ? 'Married' : 'Single',
            children: idx % 3 === 0 ? '2' : 'None',
            residenceType: "Parent's Apartment",
            education: u.education?.level || 'B.Sc',
            employmentStatus: u.education?.employmentStatus || 'Employed',
            sector: u.education?.sector || 'FinTech',
            duration: u.education?.duration || '2 years',
            officeEmail: u.education?.officeEmail || 'office@lendsqr.com',
            monthlyIncome: u.education?.monthlyIncome || ['₦200,000.00', '₦400,000.00'],
            loanRepayment: u.education?.loanRepayment || '₦40,000',
            twitter: u.socials?.twitter || '@lendsqr_user',
            facebook: u.socials?.facebook || 'Lendsqr User',
            instagram: u.socials?.instagram || '@lendsqr_user',
            guarantor: {
              name: u.guarantor ? `${u.guarantor.firstName} ${u.guarantor.lastName}` : 'Debby Ogana',
              phoneNumber: u.guarantor?.phoneNumber || '07060780922',
              email: 'debby@gmail.com',
              relationship: 'Sister',
            },
            accountBalance: u.accountBalance ? `₦${Number(u.accountBalance).toLocaleString()}.00` : '₦200,000.00',
            accountNumber: u.accountNumber || '9912345678',
            bankName: 'Providus Bank',
            tier: (idx % 3) + 1,
          };
        });
        storageMiddleware.setItem(STORAGE_KEY, normalized);
        return normalized;
      }
    }
  } catch (err) {
    console.warn('MockAPI fetch failed or timed out, utilizing robust fallback mock data:', err);
  }

  const defaultUsers = generateDefaultUsers();
  storageMiddleware.setItem(STORAGE_KEY, defaultUsers);
  return defaultUsers;
}

export function getUserById(id, usersList = []) {
  if (usersList && usersList.length > 0) {
    const found = usersList.find((u) => String(u.id) === String(id));
    if (found) return found;
  }
  const cached = storageMiddleware.getItem(STORAGE_KEY);
  if (cached && Array.isArray(cached)) {
    const found = cached.find((u) => String(u.id) === String(id));
    if (found) return found;
  }
  return null;
}

export function updateUserStatus(userId, newStatus) {
  const cached = storageMiddleware.getItem(STORAGE_KEY);
  let users = [];
  if (cached && Array.isArray(cached)) {
    users = cached;
  } else {
    users = generateDefaultUsers();
  }

  const updated = users.map((u) => (String(u.id) === String(userId) ? { ...u, status: newStatus } : u));
  storageMiddleware.setItem(STORAGE_KEY, updated);
  return updated;
}
