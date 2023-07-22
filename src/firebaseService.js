import {initializeApp, credential} from "firebase-admin"

const fireBaseConfig = {
    "type": "service_account",
    "project_id": "library-fbf63",
    "private_key_id": "a0bfc0aaf19dffc6f8ce6129fca082bdb7190322",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCiqIFFoxGHIaah\nHd1wgJmWEbjx9fkAzBSqvxs1Sf+hhUFG9tXMHYSJKgFDEaXp3P56Uc/SvgfWmkjS\nVkRhRPF6mf5WQaAFw/qfsU20bGvoN2wcxUukC9H4LjCz6CheJ45lMDgdYgYwxK0N\n92snPZ4uq4juN/3ryrjB+6pTQQpDY48ZgdlJHfEVNckiIH113iiem05y+eFeLVHh\n+h6traB2chcwBPwVML37Pm7ys/2cPMIsFOXWt76I+vGaLii9tksysaWzsnOKt4gg\nocrth6eMfCbwbH0x8Wet2flCoLm7sqe1HNLUtquafVKJHQxlM9o35KDhPCLoth4g\nFsPWHC/vAgMBAAECggEAUNYheLQz785fe07WUCT5L0WbflRZ7XV/B+R15yPhcSpC\naLwfQJOi3HANtIE+zVzQ84VZHUjnqFWAv1e0IAsdX2rMpZ1zo6nkEh0RmwsPDZcN\nmbbLgrmFHiwGdEJ6XWCXOd6e5KtknDQCNSCzFgtfY55ILOuSu+5Bp9Ykrb9zFE3I\nO6KmZT8MEED43SRq6Qji3tYFwVkH1VhjSzcZd+s8s4/iMGZXyVKmlrBsPIAbDAyc\n0zuGDEQddt72hqfvp7QL8E9+0eK60rLwQ0gNle9W6Y1zcNdUK+l+V7+nSSDWw5Di\neZ/08i9jmY2JTinJpF7XmDev4N+5ZCBntZajp0z1IQKBgQDjU1o777cqWwoRsoey\n9JyA8m7bvGDHwrpJdaLQnYWg3Ez6LhDjFZETUSZagiqJytsfvgZO2zPKe40S5FPa\nLlI8AdrdurOePyLgTZFdPrrygGIYExLOB0hzN8BPJCA4pnHjFutf3TKNCGQlHYEt\nEDsgZO7jI6c2LiHM+wuCk6d4pwKBgQC3LPTeytdeRf3uYFqmRk7gUFid2pc0UAHk\nIP32fqmGuZCLsJkv/98tFSeqsx/FPwft6yNgk8cojKnUqxS4S6vnCgPbcFhaWoxI\n896Kx9WVFN7lXJDumk5TwwitxphGEScg3+IzPKZkA6KILJg2Ds85sqUw8qvXpkVP\nQiOQYPaveQKBgBPXOpDwozP3LjHNOzrLTr2Sa0qSboAA5vFyavt6RCd+EtnjG2Y2\ng6sD8i0EH2JXajijBTnst+B8WBvGAeuRD2xdXRTtLrApIoohOwbAauCvg+BGCeYh\njJlBzG8b4BQRsu73GSQM0lSs3tC+en/MYty48oCwo+9+p0SUxLRo3r0RAoGAIuPS\nRHl4akGEq5n4ykEMFxfWuUKAmHtA0PYjyYa4vausx568nvLqzIiCBLaXr5dg6EVo\neKXNQoEAfDyV9sCbHqe+slaEzbj/jYm98ss7eGkAR8nI5VnI35V/mrIAISB1RoK+\ncCn2O4ihtbRgzbMmb4QCiP9AEhRekUk0wvRlKGkCgYA8dDegcrD0RgQ9LLdrHL0M\nv74ATCfahalGoOy6w2sjxrpAYj2E3XOfORxskhGld+c04Lj6Vxz9jIqHpKMVayKG\nOblQItuq0NiIgnbUy760GQOMnZlvtRqPToUgH3eYDrtkz+9gk5LQ9kuH52gYjZPF\nrBmdEyARsfLFuhIQYGkVoA==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-oucj0@library-fbf63.iam.gserviceaccount.com",
    "client_id": "106701804109777139888",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-oucj0%40library-fbf63.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  

export const admin  = initializeApp({
    credential: credential.cert(fireBaseConfig)
})


export async function getTotalUsers() {
    try {
      const listUsersResult = await admin.auth().listUsers();

    //   const totalUsers = listUsersResult.users.length;
    //   console.log("Total Pengguna Terdaftar:", totalUsers);
    //   return totalUsers;
      return listUsersResult;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  