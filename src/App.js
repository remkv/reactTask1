import './App.css';

const mobileServices = [
  {
    type: "FREE",
    rate: '$0/month',
    user: {
      value: 'Single User',
      active: true
    },
    storage: {
      value: '50GB Storage',
      active: true
    },
    public_projects: {
      value: 'Unlimited Public Projects',
      active: true
    },
    access: {
      value: 'Community Access',
      active: true
    },
    private_projects: {
      value: 'Unlimited Private Projects',
      active: false
    },
    support: {
      value: 'Dedicated Phone Support',
      active: false
    },
    domain: {
      value: 'Free Subdomain',
      active: false,
    },
    report: {
      value: 'Monthly Status Reports',
      active: false
    }
  },
  {
    type: "PLUS",
    rate: '9/month',
    user: {
      value: '5 Users',
      active: true
    },
    storage: {
      value: '50GB Storage',
      active: true
    },
    public_projects: {
      value: 'Unlimited Public Projects',
      active: true
    },
    access: {
      value: 'Community Access',
      active: true
    },
    private_projects: {
      value: 'Unlimited Private Projects',
      active: true
    },
    support: {
      value: 'Dedicated Phone Support',
      active: true
    },
    domain: {
      value: 'Free Subdomain',
      active: true,
    },
    report: {
      value: 'Monthly Status Reports',
      active: false
    }
  },
  {
    type: "PRO",
    rate: '$49/month',
    user: {
      value: 'Unlimited Users',
      active: true
    },
    storage: {
      value: '50GB Storage',
      active: true
    },
    public_projects: {
      value: 'Unlimited Public Projects',
      active: true
    },
    access: {
      value: 'Community Access',
      active: true
    },
    private_projects: {
      value: 'Unlimited Private Projects',
      active: true
    },
    support: {
      value: 'Dedicated Phone Support',
      active: true
    },
    domain: {
      value: 'Free Subdomain',
      active: true,
    },
    report: {
      value: 'Monthly Status Reports',
      active: true
    }
  }
];


function App() {
  return (

    <div className="box">
      <div className="card-deck">
        {mobileServices.map(service => (
          <div className="card" key={service.id}>
            <h6 className="text-muted">{service.type}</h6>
            <h2>{service.rate}</h2>
            <div className="card-body">
              {service.user.active ? (
                <p><i class="bi-check"></i>{service.user.value}</p>
              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.user.value}</p>
              )}

              {service.storage.active ? (
                <p><i class="bi-check"></i>{service.storage.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.storage.value}</p>
              )}

              {service.public_projects.active ? (
                <p><i class="bi-check"></i>{service.public_projects.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.public_projects.value}</p>
              )}

              {service.access.active ? (
                <p><i class="bi-check"></i>{service.access.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.access.value}</p>
              )}
              {service.private_projects.active ? (
                <p><i class="bi-check"></i>{service.private_projects.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.private_projects.value}</p>
              )}

              {service.support.active ? (
                <p><i class="bi-check"></i>{service.support.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.support.value}</p>
              )}
              {service.domain.active ? (
                <p><i class="bi-check"></i>{service.domain.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.domain.value}</p>
              )}
              {service.report.active ? (
                <p><i class="bi-check"></i>{service.report.value}</p>

              ) : (
                <p className="text-muted"><i class="bi-x"></i> {service.report.value}</p>
              )}


              <div className="footer">
                <a href="#" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}





export default App;
