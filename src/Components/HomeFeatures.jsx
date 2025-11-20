import React from 'react'
import { MessageSquare, TrendingUp, Shield, Clock, Users, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@mui/material';

const features = [
  {
    icon: MessageSquare,
    title: 'Easy Feedback Submission',
    description: 'Submit detailed feedback in seconds with our intuitive interface. Share your thoughts on courses, instructors, and facilities.',
    color: 'bg-primary bg-opacity-10 text-primary'
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description: 'Track feedback trends and insights instantly. Instructors can see what\'s working and what needs improvement.',
    color: 'bg-success bg-opacity-10 text-success'
  },
  {
    icon: Shield,
    title: 'Anonymous & Secure',
    description: 'Your feedback stays confidential. Share honest opinions without worrying about identification.',
    color: 'bg-purple bg-opacity-10 text-purple'
  },
  {
    icon: Clock,
    title: 'Instant Notifications',
    description: 'Get notified when instructors respond to your feedback or when new surveys are available.',
    color: 'bg-warning bg-opacity-10 text-warning'
  },
  {
    icon: Users,
    title: 'Collaborative Improvement',
    description: 'Bridge the gap between students and instructors. Create a culture of continuous improvement.',
    color: 'bg-danger bg-opacity-10 text-danger'
  },
  {
    icon: BarChart3,
    title: 'Detailed Reports',
    description: 'Generate comprehensive reports for administrators. Make data-driven decisions to enhance education quality.',
    color: 'bg-info bg-opacity-10 text-info'
  }
];
function HomeFeatures() {
  return (
    <>

      <section id="features" className="py-5 bg-white">
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Features</span>
            <h2 className="mt-2 fw-bold text-dark">
              Everything You Need for Effective Feedback
            </h2>
            <p className="text-muted mt-3">
              Our comprehensive platform is designed to make feedback collection and analysis seamless for both students and instructors.
            </p>
          </div>

          {/* Grid */}
          <div className="row g-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <Card className="shadow-sm border-0 h-100">
                    <CardContent className="p-4">

                      <div className={`rounded d-flex align-items-center justify-content-center mb-3 ${feature.color}`} style={{ width: "55px", height: "55px" }}>
                        <Icon size={26} />
                      </div>

                      <h5 className="fw-bold text-dark mb-2">{feature.title}</h5>
                      <p className="text-muted">{feature.description}</p>

                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

        </div>
      </section>
      </>
)
}

export default HomeFeatures