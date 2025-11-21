import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileCheck, Play } from "lucide-react";
import { useState } from "react";

const UploadModel = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Upload ML Model</h1>
          <p className="text-muted-foreground">Add your trained model for market simulation and analysis</p>
        </div>

        <Card className="p-8 shadow-card mb-6">
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              isDragging ? 'border-primary bg-primary/5' : 'border-border'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Drop your model file here</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Supported formats: .pt, .onnx, .pkl
            </p>
            <Button variant="outline">Browse Files</Button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl font-semibold text-primary mb-1">.pt</div>
              <div className="text-xs text-muted-foreground">PyTorch</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl font-semibold text-primary mb-1">.onnx</div>
              <div className="text-xs text-muted-foreground">ONNX Runtime</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl font-semibold text-primary mb-1">.pkl</div>
              <div className="text-xs text-muted-foreground">Pickle</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h2 className="text-xl font-semibold mb-4">Model History</h2>
          
          <div className="space-y-3">
            {[
              { name: 'stackelberg_v2.pt', version: '2.0', date: '2024-01-15', user: 'researcher@energy.edu' },
              { name: 'coalition_model.onnx', version: '1.3', date: '2024-01-10', user: 'admin@platform.com' },
              { name: 'pricing_predictor.pkl', version: '1.0', date: '2024-01-05', user: 'data@energy.edu' },
            ].map((model, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-hover transition-shadow">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{model.name}</div>
                    <div className="text-sm text-muted-foreground">v{model.version} • {model.date}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="h-3 w-3 mr-1" />
                    Validate
                  </Button>
                  <Button size="sm">Use in Simulation</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UploadModel;
