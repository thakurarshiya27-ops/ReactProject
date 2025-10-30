import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const contractAddress = '0x5daf66edb0a22b59aa51a84809fa4439fb949fca';

const contractABI = [
  "function fund() payable",
  "function confirmWork()",
  "function raiseDispute()",
  "function resolveDispute(address winner)",
  "function rateUser(address user, uint8 score)",
];

export default function EscrowApp() {
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);
  const [currentAccount, setCurrentAccount] = useState('');
  const [receiver, setReceiver] = useState('');
  const [mediator, setMediator] = useState('');
  const [deadline, setDeadline] = useState('');
  const [agreementDetails, setAgreementDetails] = useState('');
  const [fundAmount, setFundAmount] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    if(window.ethereum) {
      const tempProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(tempProvider);
    }
  }, []);

  async function connectWallet() {
    if(window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const tempSigner = await provider.getSigner();
      setSigner(tempSigner);
      const address = await tempSigner.getAddress();
      setCurrentAccount(address);
      const tempContract = new ethers.Contract(contractAddress, contractABI, tempSigner);
      setContract(tempContract);
    } else {
      alert('Please install MetaMask');
    }
  }

  async function fundEscrow() {
    if (!contract) return;
    let tx = await contract.fund({ value: ethers.parseEther(fundAmount) });
    await tx.wait();
    alert('Funds deposited');
  }

  async function confirmWork() {
    if (!contract) return;
    let tx = await contract.confirmWork();
    await tx.wait();
    alert('Work confirmed and funds released');
  }

  async function raiseDispute() {
    if (!contract) return;
    let tx = await contract.raiseDispute();
    await tx.wait();
    alert('Dispute raised');
  }

  async function resolveDispute() {
    if (!contract) return;
    const winnerAddress = prompt('Enter winner address:');
    let tx = await contract.resolveDispute(winnerAddress);
    await tx.wait();
    alert('Dispute resolved, funds released');
  }

  async function rateUser() {
    if (!contract) return;
    const userAddress = prompt('Enter user address to rate:');
    const scoreStr = prompt('Enter score from 0 to 5:');
    const score = parseInt(scoreStr);
    if(score < 0 || score > 5) return alert('Score out of range');
    let tx = await contract.rateUser(userAddress, score);
    await tx.wait();
    alert('User rated');
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Decentralized Escrow Platform</h1>
        {!currentAccount ? (
          <button 
            onClick={connectWallet}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-elevate active-elevate-2"
            data-testid="button-connect-wallet"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <p className="text-foreground mb-6">Connected: {currentAccount}</p>
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Create Agreement Info</h3>
                <div className="space-y-3">
                  <input 
                    placeholder="Receiver address" 
                    onChange={e => setReceiver(e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                    data-testid="input-receiver"
                  />
                  <input 
                    placeholder="Mediator address" 
                    onChange={e => setMediator(e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                    data-testid="input-mediator"
                  />
                  <input 
                    type="number" 
                    placeholder="Deadline (Unix Timestamp)" 
                    onChange={e => setDeadline(e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                    data-testid="input-deadline"
                  />
                  <input 
                    placeholder="Agreement details" 
                    onChange={e => setAgreementDetails(e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground"
                    data-testid="input-details"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    For contract creation, deploy new contract with above details using Remix or a deployment script.
                  </p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Fund Escrow</h3>
                <div className="flex gap-3">
                  <input 
                    placeholder="Amount in ETH" 
                    onChange={e => setFundAmount(e.target.value)}
                    className="flex-1 px-4 py-2 bg-background border border-input rounded-md text-foreground"
                    data-testid="input-fund-amount"
                  />
                  <button 
                    onClick={fundEscrow}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover-elevate active-elevate-2"
                    data-testid="button-fund"
                  >
                    Fund
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={confirmWork}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover-elevate active-elevate-2"
                  data-testid="button-confirm-work"
                >
                  Confirm Work
                </button>
                <button 
                  onClick={raiseDispute}
                  className="bg-destructive text-destructive-foreground px-6 py-2 rounded-md font-medium hover-elevate active-elevate-2"
                  data-testid="button-raise-dispute"
                >
                  Raise Dispute
                </button>
                <button 
                  onClick={resolveDispute}
                  className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md font-medium hover-elevate active-elevate-2"
                  data-testid="button-resolve-dispute"
                >
                  Resolve Dispute (Mediator)
                </button>
                <button 
                  onClick={rateUser}
                  className="bg-accent text-accent-foreground px-6 py-2 rounded-md font-medium hover-elevate active-elevate-2"
                  data-testid="button-rate-user"
                >
                  Rate User
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
